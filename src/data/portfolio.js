// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Every value here is drawn directly from Sanskriti Sahu's profile.
// Swap the `href` placeholders below for live repo / publication URLs.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Sanskriti Sahu',
  title: 'QA Engineer',
  roles: ['QA Engineer', 'Backend Developer', 'AI Engineer'],
  location: 'Bangalore, India',
  phone: '',
  email: 'sanskriti1502@gmail.com',
  github: 'https://github.com/SanskritiSahu15',
  githubHandle: 'github.com/SanskritiSahu15',
  linkedin: 'https://www.linkedin.com/in/sanskriti-sahu-8b4966268/',
  linkedinHandle: 'https://www.linkedin.com/in/sanskriti-sahu-8b4966268/',
  resumeFile: 'https://drive.google.com/uc?export=download&id=18h6-_87aOzX-EQfOM1-_04KDpKoxWgB9',
  photo: './profile.svg',
  tagline: 'I bridge quality engineering, backend development, and applied AI to ship reliable, production-ready software.',
  valueProp:
    'B.Tech in Artificial Intelligence & Data Science with hands-on experience in QA automation, backend services, and computer vision. I build strong test strategies, develop scalable APIs, and create AI-driven solutions that move from prototype to production.',
  availability: 'Open to QA, backend, and AI engineering roles'
}

// Animated headline counters in the stats strip.
export const stats = [
  { value: 3, suffix: '+', label: 'Roles Held' },
  { value: 5, suffix: '+', label: 'Projects Shipped' },
  { value: 1, suffix: '', label: 'Research Paper' },
  { value: 4, suffix: '', label: 'Certifications' }
]

// "What I do" service cards. `icon` maps to an inline SVG in ServicesGrid.vue.
export const services = [
  {
    title: 'QA & Test Engineering',
    description: 'Functional and regression test suites for AI agent workflows, bug reporting, and release-cycle quality.',
    icon: 'check'
  },
  {
    title: 'Backend Development',
    description: 'REST APIs, data pipelines, cron jobs, and logging infrastructure with Django, FastAPI, and Flask.',
    icon: 'code'
  },
  {
    title: 'Computer Vision',
    description: 'Object detection and crowd monitoring pipelines using YOLOv8 and OpenCV.',
    icon: 'eye'
  },
  {
    title: 'Applied Machine Learning',
    description: 'Deep learning model comparison (CNN, LSTM, CLSTM) for audio-based emotion classification.',
    icon: 'cpu'
  },
  {
    title: 'AI & LLM Systems',
    description: 'RAG pipelines and agentic AI workflows built on modern LLM tooling.',
    icon: 'bot'
  },
  {
    title: 'Data Pipelines & Automation',
    description: 'Web scraping, data cleaning, and automation scripts for downstream analysis.',
    icon: 'spark'
  }
]

// Animated proficiency bars in the About section.
export const proficiencies = [
  { label: 'Python & Backend APIs', value: 90 },
  { label: 'QA & Test Automation', value: 88 },
  { label: 'Computer Vision (YOLO/OpenCV)', value: 80 },
  { label: 'Deep Learning (CNN/LSTM)', value: 75 }
]

export const education = [
  {
    degree: 'B.Tech, Artificial Intelligence & Data Science',
    school: 'Dr. D. Y. Patil College of Engineering',
    detail: 'Graduated with a strong foundation in machine learning, deep learning, computer vision, NLP, and data-driven software development.',
    period: '4 years',
    coursework: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'DBMS', 'Data Structures']
  },
  {
    degree: 'Higher Secondary Education',
    school: 'CBSE Board, Bhilai',
    detail: '12th: 88% | 10th: 85.5%',
    period: '2017 - 2022',
    coursework: []
  }
]

// ---------------------------------------------------------------------------
// EXPERIENCE — vertical timeline, newest first.
// `highlights` use { text, terms } so the component can bold metrics & tools.
// ---------------------------------------------------------------------------
export const experiences = [
  {
    company: 'SuperAGI',
    role: 'QA Engineer',
    location: 'Bangalore, India',
    period: '2026',
    current: true,
    highlights: [
      {
        text: 'Designed and executed functional and regression test suites for AI agent workflows.',
        terms: ['functional', 'regression test suites', 'AI agent workflows']
      },
      {
        text: 'Collaborated with developers to identify, reproduce, and document bugs, maintaining quality across release cycles.',
        terms: ['identify, reproduce, and document bugs', 'release cycles']
      }
    ]
  },
  {
    company: 'NexaThread',
    role: 'Backend Developer',
    location: 'Bangalore, India',
    period: '2025',
    current: false,
    highlights: [
      {
        text: 'Built and maintained backend APIs and data pipelines.',
        terms: ['backend APIs', 'data pipelines']
      },
      {
        text: 'Implemented cron jobs for scheduled tasks, added logging infrastructure, and optimized system performance.',
        terms: ['cron jobs', 'logging infrastructure', 'optimized system performance']
      }
    ]
  },
  {
    company: 'AI4SEE',
    role: 'Computer Vision Engineer',
    location: 'Bangalore, India',
    period: '2025',
    current: false,
    highlights: [
      {
        text: 'Developed object detection models using YOLO for real-world vision tasks.',
        terms: ['object detection', 'YOLO']
      },
      {
        text: 'Handled image processing pipelines and evaluated model accuracy and performance metrics.',
        terms: ['image processing pipelines', 'model accuracy']
      }
    ]
  }
]

// ---------------------------------------------------------------------------
// PROJECTS & PUBLISHED RESEARCH — drives the filterable grid.
// `category` powers the filter pills (dynamically derived in the component).
// ---------------------------------------------------------------------------
export const projects = [
  {
    title: 'Crowd Detection & Counting',
    subtitle: 'Real-Time Crowd Monitoring System',
    category: 'Computer Vision',
    type: 'Project',
    description:
      'Real-time crowd monitoring system using YOLOv8 and OpenCV. Detects and counts people in video streams with high accuracy, suitable for public safety and event management.',
    impact: 'High-accuracy real-time people counting from live video streams.',
    tools: ['YOLOv8', 'OpenCV', 'Python', 'Object Detection'],
    links: [{ label: 'View code', href: 'https://github.com/SanskritiSahu15/Crowd_Detection_YOLOv8', kind: 'code' }]
  },
  {
    title: 'Speech Emotion Recognition',
    subtitle: 'Multi-Architecture Deep Learning System',
    category: 'Deep Learning',
    type: 'Publication',
    description:
      'Multi-architecture deep learning system for classifying emotions from audio. Compared CNN, LSTM, and CLSTM models using Librosa features and TensorFlow. Published as a research paper and presented at the ICONS conference.',
    impact: 'Published research paper, presented at ICONS academic conference.',
    tools: ['CNN', 'LSTM', 'CLSTM', 'Librosa', 'TensorFlow'],
    links: [{ label: 'View code', href: 'https://github.com/SanskritiSahu15/speech_sentiment-_analysis-', kind: 'code' }]
  },
  {
    title: 'Web Scraping Toolkit',
    subtitle: 'Data Extraction & Automation',
    category: 'Data Engineering',
    type: 'Project',
    description:
      'A Python-based web scraping project for extracting, cleaning, and structuring data from websites, enabling downstream analysis and automation.',
    impact: 'Automated structured data extraction for downstream analytics.',
    tools: ['Python', 'Web Scraping', 'Automation'],
    links: [{ label: 'View code', href: 'https://github.com/SanskritiSahu15/WebScrapping', kind: 'code' }]
  }
]

// ---------------------------------------------------------------------------
// SKILLS — grouped into semantic categories (text badge grids, no bars).
// ---------------------------------------------------------------------------
export const skillGroups = [
  {
    category: 'AI & Machine Learning',
    skills: [
      'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP',
      'LLMs', 'RAG', 'Agentic AI', 'YOLOv8'
    ]
  },
  {
    category: 'Backend Development',
    skills: ['Django', 'FastAPI', 'Flask', 'REST APIs', 'Cron Jobs', 'Data Pipelines']
  },
  {
    category: 'QA Engineering',
    skills: ['Manual Testing', 'Regression Testing', 'Functional Testing', 'Test Case Design', 'Bug Reporting']
  },
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'C', 'SQL', 'R']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Git', 'CI/CD']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL']
  }
]

// ---------------------------------------------------------------------------
// CERTIFICATIONS
// ---------------------------------------------------------------------------
export const certifications = [
  {
    name: 'Python for Data Science',
    issuer: 'IBM',
    href: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE%7ENNQCT6WFBT33/CERTIFICATE_LANDING_PAGE%7ENNQCT6WFBT33.jpeg'
  },
  {
    name: 'Technology Virtual Experience',
    issuer: 'JP Morgan',
    href: 'https://drive.google.com/file/d/1iVipnpqKqamUHcRknnjdKIuxDjPuYc6m/view'
  },
  {
    name: 'Technology Consulting Sim',
    issuer: 'Deloitte',
    href: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE%7E0QF9950TTHD3/CERTIFICATE_LANDING_PAGE%7E0QF9950TTHD3.jpeg'
  },
  {
    name: 'Software Testing',
    issuer: 'Certified',
    href: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_4c9zWuXmYRppe5qiE_1738007506128_completion_certificate.pdf'
  }
]

// ---------------------------------------------------------------------------
// ACHIEVEMENTS
// ---------------------------------------------------------------------------
export const achievements = [
  {
    title: 'Published Research Paper',
    description: 'Authored and published a research paper on Speech Emotion Recognition, contributing to the academic body of work in audio-based AI.'
  },
  {
    title: 'ICONS Conference',
    description: 'Presented research findings at the ICONS academic conference, demonstrating work in front of researchers and industry professionals.'
  },
  {
    title: 'Data Visualization Hackathon',
    description: 'Competed in a national-level data visualization hackathon, delivering high-impact visual analytics under time constraints.'
  }
]

export const extras = [
  'Exploring modern QA tooling and AI-assisted testing workflows.',
  'Reading about scalable backend architecture and agentic AI systems.',
  'Enjoying projects that connect product thinking with technical execution.'
]