#!/usr/bin/env python3
"""Import new Substack posts as al-folio blog stubs.

Reads the Substack RSS feed and writes a stub file into ``_posts/`` for
each item not already present. Idempotent: safe to re-run.

Each stub sets ``redirect:`` + ``external_source: Substack``. The blog
index (``_pages/blog.md``) uses this to render the title as an external
link; ``_layouts/default.liquid`` emits a meta-refresh for anyone who
lands on the stub's own URL.
"""
from __future__ import annotations

import datetime
import email.utils
import os
import pathlib
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET

FEED_URL = os.environ.get("SUBSTACK_FEED_URL", "https://hudsonmp.substack.com/feed")
REPO_ROOT = pathlib.Path(__file__).resolve().parent.parent
POSTS_DIR = REPO_ROOT / "_posts"


def slugify_from_url(url: str) -> str:
    m = re.search(r"/p/([^/?#]+)", url)
    if m:
        return m.group(1).lower()
    return re.sub(r"[^a-z0-9-]+", "-", url.lower()).strip("-")


def escape_yaml(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def collapse_whitespace(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


def truncate(s: str, n: int = 240) -> str:
    s = collapse_whitespace(s)
    return s if len(s) <= n else s[: n - 1].rstrip() + "\u2026"


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "substack-import/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def parse_items(xml_bytes: bytes):
    root = ET.fromstring(xml_bytes)
    for item in root.findall(".//item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        pub = (item.findtext("pubDate") or "").strip()
        desc_raw = (item.findtext("description") or "").strip()
        if not (title and link and pub):
            continue
        dt = email.utils.parsedate_to_datetime(pub).astimezone(datetime.timezone.utc)
        desc = re.sub(r"<[^>]+>", " ", desc_raw)
        yield {
            "title": title,
            "link": link,
            "date": dt.strftime("%Y-%m-%d"),
            "slug": slugify_from_url(link),
            "description": truncate(desc),
        }


def render_stub(post: dict) -> str:
    return (
        "---\n"
        "layout: post\n"
        f'title: "{escape_yaml(post["title"])}"\n'
        f"date: {post['date']}\n"
        f'description: "{escape_yaml(post["description"])}"\n'
        f"redirect: {post['link']}\n"
        "external_source: Substack\n"
        "---\n"
    )


def main() -> int:
    POSTS_DIR.mkdir(exist_ok=True)
    xml_bytes = fetch(FEED_URL)
    written: list[str] = []
    for post in parse_items(xml_bytes):
        path = POSTS_DIR / f"{post['date']}-{post['slug']}.md"
        if path.exists():
            continue
        path.write_text(render_stub(post), encoding="utf-8")
        written.append(path.name)
    for name in written:
        print(f"created {name}")
    print(f"{len(written)} new Substack stub(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
