// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Every value here is drawn directly from Harshit Kumar Shrivastava's resume.
// Swap the `href` placeholders below for live repo / publication URLs.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Harshit Kumar Shrivastava',
  title: 'AI/ML Engineer',
  roles: ['AI/ML Engineer', 'Data Analyst', 'Applied AI', 'Computer Vision', 'LLM Systems'],
  location: 'Durg, Chhattisgarh, India',
  phone: '+91-7000873227',
  email: 'harshityuvraj10@gmail.com',
  github: 'https://github.com/BenTennyson100',
  githubHandle: 'github.com/BenTennyson100',
  linkedin: 'https://linkedin.com/in/harshit-shrivastava-9042b3218',
  linkedinHandle: 'linkedin.com/in/harshit-shrivastava',
  resumeFile: './HarshitKumarShrivastava_Resume.pdf',
  // Drop your portrait at portfolio_dist/public/profile.jpg (or change this path).
  // While empty, the hero shows a styled placeholder.
  photo: './profile.jpg',
  tagline: 'I build production AI — from multi-agent LLM platforms to real-time computer vision.',
  // Two-sentence value proposition mapped from the resume summary.
  valueProp:
    'Final-year BTech (AI & ML) engineer with 18+ months of internship experience shipping production AI — from multi-agent LLM platforms and real-time computer vision pipelines to full-stack marketing features and BI dashboards. I own features end-to-end in fast-paced product teams and translate technical outcomes into clear business impact.',
  availability: 'Available for full-time roles'
}

// Animated headline counters in the stats strip.
export const stats = [
  { value: 18, suffix: '+', label: 'Months Experience' },
  { value: 4, suffix: '', label: 'Internships' },
  { value: 6, suffix: '', label: 'Projects Shipped' },
  { value: 1, suffix: '', label: 'Published Paper' }
]

// "What I do" service cards. `icon` maps to an inline SVG in ServicesGrid.vue.
export const services = [
  {
    title: 'LLM & Agentic Systems',
    description: 'Multi-agent platforms, RAG pipelines, and MCP-based dynamic model routing.',
    icon: 'bot'
  },
  {
    title: 'Computer Vision',
    description: 'Real-time object detection and tracking pipelines on live video feeds.',
    icon: 'eye'
  },
  {
    title: 'Data Analytics & BI',
    description: 'Python/SQL analysis and interactive Power BI / Tableau dashboards.',
    icon: 'chart'
  },
  {
    title: 'Full-Stack Engineering',
    description: 'End-to-end product features shipped in fast-paced startup teams.',
    icon: 'code'
  },
  {
    title: 'Applied Machine Learning',
    description: 'Model training, evaluation, and deployment with TensorFlow & PyTorch.',
    icon: 'cpu'
  },
  {
    title: 'Prompt Engineering',
    description: 'Grounded, reliable, and reproducible LLM behaviour at production scale.',
    icon: 'spark'
  }
]

// Animated proficiency bars in the About section.
export const proficiencies = [
  { label: 'Python & Applied ML', value: 95 },
  { label: 'LLMs & Generative AI', value: 90 },
  { label: 'Data & SQL Analytics', value: 85 },
  { label: 'Computer Vision', value: 80 }
]

export const education = [
  {
    degree: 'B.Tech, Computer Science Engineering (AI & ML)',
    school: 'Jain University FET, Bangalore',
    detail: 'CGPA 8.2',
    period: 'Graduated May 2026',
    coursework: ['Data Structures', 'Algorithms', 'OOPs', 'DBMS', 'Machine Learning', 'Deep Learning', 'NLP', 'OS']
  },
  {
    degree: 'Class XII — CBSE',
    school: 'MGM Senior Secondary School, Bhilai, Chhattisgarh',
    detail: '74%',
    period: '2022',
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
    role: 'Software Development Engineering Intern',
    location: 'Bangalore',
    period: 'Jan 2026 — Present',
    current: true,
    highlights: [
      {
        text: 'Led software development for the Marketing Pod, owning end-to-end feature delivery for the marketing campaigns module of the platform.',
        terms: ['Marketing Pod', 'end-to-end', 'marketing campaigns module']
      },
      {
        text: 'Designed and delivered a production-ready WhatsApp Test Button for marketing campaigns, letting marketers preview and validate message templates before live sends — reducing campaign errors at source.',
        terms: ['production-ready', 'WhatsApp Test Button', 'reducing campaign errors']
      },
      {
        text: 'Built the WhatsApp & Email subscribe/unsubscribe system end-to-end, covering opt-in/opt-out flows, compliance logic, and user preference management across campaigns.',
        terms: ['subscribe/unsubscribe', 'compliance logic', 'user preference management']
      },
      {
        text: 'Ranked #1 in the Feb 2026 company-wide Bug Bash, resolving the highest number of bugs that month and demonstrating deep codebase ownership and systematic debugging discipline.',
        terms: ['Ranked #1', 'Bug Bash', 'codebase ownership']
      }
    ]
  },
  {
    company: 'Assisto Technologies Pvt. Ltd.',
    role: 'Artificial Intelligence Intern',
    location: 'Bangalore',
    period: 'Aug 2025 — Nov 2025',
    current: false,
    highlights: [
      {
        text: 'Engineered a production-grade multi-agent AI assistant platform integrating Model Context Protocol (MCP) with dynamic LLM routing across Qwen-series models, improving query accuracy and response efficiency.',
        terms: ['multi-agent AI assistant', 'Model Context Protocol (MCP)', 'dynamic LLM routing', 'Qwen-series']
      },
      {
        text: 'Built intelligent retrieval systems using MongoDB, JSONL datasets, and custom retrievers — combining database lookups with LLM reasoning for real-time contextual query answering with persistent chat memory.',
        terms: ['MongoDB', 'JSONL', 'custom retrievers', 'persistent chat memory']
      },
      {
        text: 'Developed and deployed modular AI pipelines using LangChain, LangGraph, and Ollama, delivering translation agents, a ball-tracking ML workflow, and a rental platform prototype with scalable context management.',
        terms: ['LangChain', 'LangGraph', 'Ollama', 'scalable context management']
      }
    ]
  },
  {
    company: 'Six Phrase (Veranda)',
    role: 'Computer Vision Intern',
    location: 'Bangalore',
    period: 'Feb 2025 — May 2025',
    current: false,
    highlights: [
      {
        text: 'Built a real-time ball tracking system in Python and OpenCV, combining object detection and trajectory estimation to deliver frame-by-frame positional analysis on live video feeds.',
        terms: ['real-time ball tracking', 'Python', 'OpenCV', 'frame-by-frame positional analysis']
      },
      {
        text: 'Architected modular computer vision pipelines with clean separation of detection, tracking, and output stages, letting new sports or camera configurations be onboarded without core rewrites.',
        terms: ['modular computer vision pipelines', 'without core rewrites']
      }
    ]
  },
  {
    company: 'Futurense Technologies',
    role: 'Data Analyst Intern',
    location: 'Bangalore',
    period: 'Apr 2024 — Jun 2024',
    current: false,
    highlights: [
      {
        text: 'Analyzed 20,000+ records using Python and SQL to extract actionable insights and identify key performance trends across business datasets.',
        terms: ['20,000+ records', 'Python', 'SQL']
      },
      {
        text: 'Built interactive Power BI dashboards and delivered data-driven recommendations that improved user metrics by 15%.',
        terms: ['Power BI', 'improved user metrics by 15%']
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
    title: 'AR-Aura',
    subtitle: 'Augmented Reality Application',
    category: 'AR Systems',
    type: 'Project',
    description:
      'Interactive augmented reality app that lets users draw and interact with virtual objects overlaid on real-world environments through the device camera.',
    impact: 'Real-time object overlay with preprocessing-trained AR models for seamless environmental interaction.',
    tools: ['Unity', 'C#', 'Vuforia'],
    links: [{ label: 'View code', href: 'https://github.com/BenTennyson100', kind: 'code' }]
  },
  {
    title: 'RAG-ChatBot',
    subtitle: 'Context-Aware Retrieval Chatbot',
    category: 'LLM Systems',
    type: 'Project',
    description:
      'Context-aware chatbot combining semantic search and document indexing to return accurate, grounded responses instead of free-floating LLM output.',
    impact: 'RAG prompting over local + remote LLMs measurably improved answer quality vs. standalone LLM responses.',
    tools: ['LangChain', 'OpenAI API', 'Hugging Face', 'RAG'],
    links: [{ label: 'View code', href: 'https://github.com/BenTennyson100', kind: 'code' }]
  },
  {
    title: 'C.A.R.T.A.',
    subtitle: 'Cricket Augmented Reality Training Application',
    category: 'AR Systems',
    type: 'Publication',
    description:
      'Published research on an augmented reality training application for cricket — Shrivastava, H. K. & Sahu, S., ICONS 2024, Jain School of Sciences, Bangalore.',
    impact: 'Peer-reviewed and presented at ICONS 2024.',
    tools: ['Augmented Reality', 'Computer Vision', 'Research'],
    links: [{ label: 'View publication', href: 'https://github.com/BenTennyson100', kind: 'doc' }]
  },
  {
    title: 'Multi-Agent AI Assistant Platform',
    subtitle: 'Built at Assisto Technologies',
    category: 'LLM Systems',
    type: 'Engineering',
    description:
      'Production-grade multi-agent assistant integrating Model Context Protocol with dynamic LLM routing across Qwen-series models, plus retrieval over MongoDB and custom retrievers with persistent chat memory.',
    impact: 'Improved query accuracy and response efficiency through MCP-based routing and grounded retrieval.',
    tools: ['MCP', 'LangGraph', 'Qwen', 'MongoDB', 'Ollama'],
    links: [{ label: 'View code', href: 'https://github.com/BenTennyson100', kind: 'code' }]
  },
  {
    title: 'Real-Time Ball Tracking System',
    subtitle: 'Built at Six Phrase (Veranda)',
    category: 'Computer Vision',
    type: 'Engineering',
    description:
      'Real-time tracking system combining object detection and trajectory estimation for frame-by-frame positional analysis on live video, built on modular CV pipelines.',
    impact: 'Modular detection / tracking / output stages onboard new sports or cameras without core rewrites.',
    tools: ['Python', 'OpenCV', 'Object Detection'],
    links: [{ label: 'View code', href: 'https://github.com/BenTennyson100', kind: 'code' }]
  },
  {
    title: 'Business Intelligence Dashboards',
    subtitle: 'Built at Futurense Technologies',
    category: 'Data Science',
    type: 'Engineering',
    description:
      'Analyzed 20,000+ business records with Python and SQL, then shipped interactive Power BI dashboards surfacing key performance trends and data-driven recommendations.',
    impact: 'Recommendations improved user metrics by 15%.',
    tools: ['Python', 'SQL', 'Power BI'],
    links: [{ label: 'View code', href: 'https://github.com/BenTennyson100', kind: 'code' }]
  }
]

// ---------------------------------------------------------------------------
// SKILLS — grouped into semantic categories (text badge grids, no bars).
// ---------------------------------------------------------------------------
export const skillGroups = [
  {
    category: 'Languages & Frameworks',
    skills: [
      'Python', 'Java', 'GoLang', 'Ruby on Rails',
      'Django', 'Node.js', 'Streamlit', 'Jupyter'
    ]
  },
  {
    category: 'AI/ML & Generative AI',
    skills: [
      'TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'LangGraph',
      'RAG', 'Prompt Engineering', 'LLMs', 'NLP', 'Generative AI', 'OpenCV',
      'Multi-Agent Systems', 'MCP'
    ]
  },
  {
    category: 'Data & Analytics',
    skills: ['Pandas', 'NumPy', 'Power BI', 'Tableau', 'SQL', 'ETL', 'A/B Testing']
  },
  {
    category: 'Databases & Vector Stores',
    skills: ['MySQL', 'MongoDB', 'FAISS', 'Pinecone', 'Vector Databases']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (S3, EC2, Lambda, SNS)', 'GCP', 'Git', 'REST APIs', 'API Integration']
  },
  {
    category: 'Leadership & Communication',
    skills: ['Problem Solving', 'Communication', 'Teamwork', 'Analytical Thinking', 'SDLC']
  }
]

export const extras = [
  'Member & Host, Orators Club, Jain University FET — Hosted Annual Fest Infinity 2K25',
  'State-Level Cricketer — Represented Chhattisgarh in inter-state tournaments'
]
