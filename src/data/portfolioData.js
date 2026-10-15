// All portfolio content lives here. Source: original portfolio + Muthupandi_P_Resume.pdf.

export const profile = {
  name: 'Muthupandi P',
  role: 'Python Full Stack Developer',
  tagline: 'I build backend APIs, automation workflows, HR systems, and interactive web applications.',
  summary:
    'Python Full Stack Developer with hands-on experience in Python, Django, Django REST Framework, React.js, REST APIs, JWT authentication, RBAC, PostgreSQL, MySQL, AWS S3, workflow automation, biometric integration, and interactive web applications.',
  email: 'muthupandi7874@gmail.com',
  phone: '+91 8610967874',
  location: 'Madurai, Tamil Nadu, India',
  github: 'https://github.com/strmuthu1234-cmd',
  linkedin: 'https://www.linkedin.com/in/muthupandi-p-b38b46227',
  resume: '/resume.pdf',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '11', label: 'HRM Modules' },
  { value: '100+', label: 'Employees Managed' },
  { value: '4+', label: 'Major Projects' },
]

export const terminalSkills = ['Python', 'Django', 'DRF', 'React', 'PostgreSQL', 'AWS', 'n8n']

export const highlights = [
  { title: 'Backend-first', text: 'Django + DRF APIs with JWT, RBAC and PostgreSQL.' },
  { title: 'Automation', text: 'n8n and Python workflows that remove manual work.' },
  { title: 'Integrations', text: 'Biometric devices, email systems and cloud storage.' },
]

export const education = [
  { title: 'Bachelor of Engineering (BE), Electrical, Electronics and Communications Engineering', place: 'Mangayarkarasi College of Engineering, Madurai', period: 'Jun 2017 – Apr 2020' },
  { title: 'Diploma, Electrical, Electronics and Communications Engineering', place: 'Government Polytechnic College, Chekkanurani, Madurai', period: 'Feb 2014 – Jan 2017' },
]

export const skillGroups = [
  { title: 'Programming Languages', items: ['Python', 'JavaScript'] },
  { title: 'Frontend', items: ['React.js', 'HTML5', 'CSS3'] },
  { title: 'Backend', items: ['Django', 'Django REST Framework (DRF)', 'Flask', 'REST APIs', 'JWT'] },
  { title: 'Database', items: ['PostgreSQL', 'MySQL'] },
  { title: 'Developer Tools', items: ['Git', 'GitHub', 'GitLab', 'Postman', 'FileZilla'] },
  { title: 'Cloud / DevOps', items: ['AWS (S3)'] },
  { title: 'Automation & AI', items: ['n8n', 'Claude', 'Google Gemini', 'OpenClaw', 'NotebookLM'] },
  { title: 'Core Concepts', items: ['Authentication', 'Authorization', 'CRUD Operations', 'API Integration', 'Workflow Automation'] },
]

export const experience = [
  {
    role: 'Junior Backend & Python Developer (Full Stack)',
    company: 'Beeyoond Gaming (Sportstech GmbH, Germany)',
    start: 'Jul 2025',
    end: 'Present',
    current: true,
    points: [
      'Developed full-stack applications using Python, Django, DRF, React.js, and REST APIs.',
      'Built and maintained 11 HRM modules supporting 100+ employee records with JWT authentication and RBAC.',
      'Integrated biometric devices through IP-based connectivity to automate employee check-in/check-out and attendance tracking.',
      'Developed responsive email templates and newsletter systems optimized for Gmail, Outlook, and mobile clients.',
      'Contributed to interactive 3D product visualization and React-based web applications.',
    ],
  },
]

export const projects = [
  {
    id: 'hrm',
    title: 'Human Resource Management System (HRM)',
    featured: true,
    short: 'Full-stack HRM portal managing 100+ employee records with authentication and role-based access.',
    tech: ['Django', 'DRF', 'React.js', 'PostgreSQL', 'JWT Auth', 'Postman'],
    features: [
      'Built 11 HR modules including Employee Management, Leave, Attendance, Assets, Payslip, and Configuration with RBAC.',
      'Integrated biometric attendance directly via device IP address, mapping unique employee IDs to retrieve and store check-in/check-out data.',
      'Automated attendance and late-coming tracking using biometric data, reducing manual HR effort.',
    ],
    role: 'Full-stack developer — React.js frontend and Django REST backend.',
    live: 'https://hrm.sportstech.team',
  },
  {
    id: 'newsletter',
    title: 'Newsletter Email Template System',
    short: 'Responsive, brand-consistent HTML email templates for marketing campaigns and newsletters.',
    tech: ['HTML', 'CSS', 'Email Design', 'Animations', 'Cross-client'],
    features: [
      'Optimized for Gmail, Outlook, and mobile devices.',
      'Reusable templates with animations and cross-client compatibility for better engagement.',
      'Supported bulk email campaigns, enabling scalable delivery to thousands of subscribers.',
    ],
    role: 'Developer — designed and built the email templates.',
  },
  {
    id: 'email-automation',
    title: 'Email Automation R&D',
    short: 'Automated newsletter generation pipeline that cuts manual effort in email creation and bulk delivery.',
    tech: ['Python', 'Automation', 'Bulk Email'],
    features: [
      'Researched and built an automated newsletter generation pipeline.',
      'Significantly reduced manual effort in email creation.',
      'Improved the efficiency of bulk email delivery workflows.',
    ],
    role: 'Researcher & developer — Python automation.',
  },
  {
    id: 'viewer-360',
    title: '360-Degree Product Viewer',
    short: 'Immersive 3D panoramic product viewer with click-to-animate interactions.',
    tech: ['JavaScript', 'HTML', 'CSS', 'WebGL'],
    features: [
      '12+ user-triggered animation states for inspecting products from multiple angles.',
      'Optimized WebGL rendering with custom shaders, reducing load time by 35%.',
      'Contributed to a 20% reduction in product returns.',
    ],
    role: 'Contributing developer — interactive 3D visualization.',
  },
  {
    id: 'room-planner',
    title: 'Interactive 3D Room Planner',
    short: 'Real-time 3D room planning tool with physics-based interactions and cross-platform AR support.',
    tech: ['React.js', 'JavaScript', 'CSS'],
    features: [
      'Lets users visually design, customize, and arrange room layouts.',
      'Intuitive UI/UX designed for non-technical users.',
      'Contributed to an 18% increase in average order value.',
    ],
    role: 'Contributing developer — React.js front end and UI/UX.',
  },
]
