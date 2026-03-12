// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of projects and hackathons.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-proofs",
          title: "proofs",
          description: "Mathematical proofs and derivations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/proofs/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "many of these repositories have since been deprecated.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching-amp-talks",
          title: "teaching &amp; talks",
          description: "Presentations, talks, and podcasts.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Hudson Mitchell-Pullman&#39;s CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-library",
          title: "library",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/library/";
          },
        },{id: "post-transforming-societies",
        
          title: "Transforming Societies",
        
        description: "On optimizing for transformational impact rather than positive impact.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/transforming-societies/";
          
        },
      },{id: "post-why-do-we-learn-stem",
        
          title: "Why do we Learn STEM?",
        
        description: "My thoughts on what we&#39;re getting wrong about STEM education.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/why-do-we-learn-stem/";
          
        },
      },{id: "post-who-was-i-part-i",
        
          title: "Who Was I (part I)?",
        
        description: "My childhood (through first semester, freshman year of high school).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/first-post/";
          
        },
      },{id: "books-architects-of-intelligence",
          title: 'Architects of Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/architects_of_intelligence/";
            },},{id: "books-einstein-his-life-and-universe",
          title: 'Einstein: His Life and Universe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/einstein/";
            },},{id: "books-elon-musk",
          title: 'Elon Musk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/musk/";
            },},{id: "books-the-alchemist",
          title: 'The Alchemist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_alchemist/";
            },},{id: "books-the-worlds-i-see",
          title: 'The Worlds I See',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_worlds_i_see/";
            },},{id: "books-zero-to-one",
          title: 'Zero to One',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/zero_to_one/";
            },},{id: "hackathons-arxai",
          title: 'arxai',
          description: "deep research tool that launches parallel agents to index your existing research and surface insights. built at sdx 10/2025.",
          section: "Hackathons",handler: () => {
              window.location.href = "/hackathons/arxai/";
            },},{id: "hackathons-arxlearn",
          title: 'arxlearn',
          description: "accelerated learning tool that distills complex topics to essentials, models what you know, and generates a personalized dependency-ordered learning path.",
          section: "Hackathons",handler: () => {
              window.location.href = "/hackathons/arxlearn/";
            },},{id: "hackathons-firstintel",
          title: 'firstintel',
          description: "computer vision system using fine-tuned yolo-v8 to track people entering/exiting buildings and automatically relay count data to 911 via twilio so first responders know exactly who&#39;s inside.",
          section: "Hackathons",handler: () => {
              window.location.href = "/hackathons/firstintel/";
            },},{id: "hackathons-realtime-math",
          title: 'realtime-math',
          description: "realtime math tutor on ipad using cognitive task analysis via pilot studies — handwritten math recognition and latex conversion.",
          section: "Hackathons",handler: () => {
              window.location.href = "/hackathons/realtime-math/";
            },},{id: "hackathons-syntra",
          title: 'syntra',
          description: "cursor for design — ai-powered figma workflows. cerebral valley finalist.",
          section: "Hackathons",handler: () => {
              window.location.href = "/hackathons/syntra/";
            },},{id: "hackathons-turingvault",
          title: 'turingvault',
          description: "ai-powered security analysis for git repos — scans vibe-coded projects for vulnerabilities using research-backed static analysis and gives actionable fix suggestions.",
          section: "Hackathons",handler: () => {
              window.location.href = "/hackathons/turingvault/";
            },},{id: "news-conducted-60-person-pilot-study-with-ap-computer-science-students",
          title: 'Conducted 60-person pilot study with AP Computer Science Students.',
          description: "",
          section: "News",},{id: "news-submitting-to-aied-blue-sky-track",
          title: 'Submitting to AIED Blue Sky Track.',
          description: "",
          section: "News",},{id: "news-seeking-unpaid-raship-at-cmu-for-summer-2026",
          title: 'Seeking unpaid RAship at CMU for Summer 2026.',
          description: "",
          section: "News",},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv-current.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%75%64%73%6F%6E%6D%69%74%63%68%65%6C%6C%70%75%6C%6C%6D%61%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hudsonmp", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/hudsonmp10", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hudson-mitchell-pullman-0b6161265", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
