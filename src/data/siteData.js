// src/data/siteData.js
// ── Update this file to change all portfolio content ──

export const personal = {
  name: 'Mohammed Baqhir R',
  displayName: 'Mohammed Baqhir',
  roles: [
    'Full Stack Developer',
    'AI & ML Engineer',
    'Data Analytics Student',
    'Software Engineer',
    'CS Engineering Student',
  ],
  tagline: 'I build software that sits at the crossroads of full-stack development, machine learning, and data — with a focus on things that actually work in the real world.',
  about: [
    'I am a Computer Science Engineering student at Dr. M.G.R. Educational and Research Institute, specialising in Data Science and AI. My work spans full-stack development, computer vision, and machine learning — built around solving problems that exist outside the classroom.',
    'I have shipped projects ranging from a real-time PPE detection system using YOLO to interactive web platforms for EdTech. I work across the stack — React and Node on the front and back, Python for ML, and tools like Docker and GitHub Actions to keep things running.',
    'Outside engineering, I have coordinated large college events, hosted a national conference, and run AI outreach sessions in local schools. I care about communicating technical work clearly, not just building it.',
  ],
  location: 'Chennai, India',
  email: 'baqhirmohammed@gmail.com',
  phone: '+91 70923 07860',
  github: 'https://github.com/Mohammed-Baqhir',
  linkedin: 'https://www.linkedin.com/in/mohammed-baqhir/',
  resumeFile: '/resume.pdf?v=' + new Date().getTime(),
  photo: '/avatar.jpg',
};

export const skills = [
  {
    category: 'Programming Languages',
    icon: '{ }',
    items: ['Python', 'JavaScript', 'HTML', 'CSS', 'Java'],
  },
  {
    category: 'Full Stack Development',
    icon: '⚡',
    items: ['React.js', 'Node.js', 'Express.js', 'Streamlit', 'Flask'],
  },
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    items: ['Machine Learning', 'Scikit-learn', 'OpenCV', 'YOLO', 'OpenAI API', 'Claude AI', 'AI Automation'],
  },
  {
    category: 'Data Analytics',
    icon: '📊',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Data Analytics', 'BI Fundamentals'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['MongoDB', 'MySQL', 'NoSQL'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'OpenShift', 'Vercel', 'CI/CD', 'Cursor AI'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'PPE Detection & Monitoring AI',
    description:
      'Real-time computer vision pipeline that detects Personal Protective Equipment — helmets, safety jackets, and gear — from live visual input for construction and mining environments.',
    tech: ['Python', 'OpenCV', 'YOLO', 'NumPy'],
    category: 'AI / ML',
    github: 'https://github.com/Mohammed-Baqhir',
    live: null,
    highlights: [
      'Real-time YOLO-based PPE detection',
      'Automated compliance monitoring',
      'Reduces manual safety oversight on-site',
    ],
    image: null,
  },
  {
    id: 2,
    title: 'Edumo — Fun Learning Platform',
    description:
      'An interactive EdTech web platform combining structured content with activity-based learning, designed for visual learners at school and college level.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    github: 'https://github.com/Mohammed-Baqhir',
    live: null,
    highlights: [
      'Module-based content delivery system',
      'Engaging UI for visual learners',
      'Activity-based exercises for active retention',
    ],
    image: null,
  },
];

export const certifications = [
  { name: 'IBM Full-Stack JavaScript Developer Professional Certificate', provider: 'IBM / Coursera', year: '2026', icon: '🏆' },
  { name: 'Foundations of Data Science', provider: 'Google / Coursera', year: '2025', icon: '📊' },
  { name: 'Data Analytics Job Simulation', provider: 'Deloitte Australia / Forage', year: '2026', icon: '📈' },
  { name: 'Java Fundamentals', provider: 'IBM', year: '2023', icon: '☕' },
  { name: 'Introduction to Python', provider: 'IBM', year: '2023', icon: '🐍' },
  { name: 'Software Testing', provider: 'NPTEL', year: '2026', icon: '🧪' },
];

export const achievements = [
  { icon: '🏅', title: 'Special Award — TechVistra \'25', desc: 'Recognised for outstanding contribution and performance as event coordinator.' },
  { icon: '🌍', title: 'Event Coordinator — SDG Event', desc: 'Led planning and successful execution of a Sustainable Development Goals event.' },
  { icon: '🎓', title: 'ISR Session on AI & Data Science', desc: 'Organised and hosted an outreach session at Shenoy Nagar Corporation School, earning official college certification.' },
  { icon: '🎤', title: 'Master of Ceremony — YUKTI\'26', desc: 'Served as MC for Audi Fest \'26 and YUKTI\'26 — INFYNIX National Conference.' },
];

export const education = [
  {
    degree: 'B.Tech — Computer Science Engineering (Data Science & AI)',
    institution: 'Dr. M.G.R. Educational and Research Institute',
    location: 'Chennai, India',
    duration: '2023 – 2027',
    status: 'Expected 2027',
  },
];
