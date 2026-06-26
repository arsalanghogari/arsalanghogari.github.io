// Experience timeline — single source of truth for the home timeline
// and any future "about" detail.

export interface Job {
  role: string;
  org: string;
  orgHref?: string;
  date: string;
  blurb: string;
  image?: string;
  logo?: string;
}

export const EXPERIENCE: Job[] = [
  {
    role: 'Director of Digital Strategy',
    org: 'USC Student Government',
    orgHref: 'https://usg.usc.edu',
    date: 'May 2025 — Present',
    blurb:
      'Run the official USG website serving 20,000+ students — front-end features in HTML/CSS/JS, a dynamic announcements system, interactive election interfaces, Legislative / Senate Bill / Funding trackers, and an AI campus-resource chatbot using OpenAI embeddings and RAG. Asked back for a second year.',
    image: '/images/usg-site.jpg',
  },
  {
    role: 'Software / Perception Lead',
    org: 'USC RoboSub',
    orgHref: 'https://uscfrl.com',
    date: 'Jan 2024 — Present',
    blurb:
      "Lead the autonomous sub's perception stack — computer vision and sonar-based object detection for underwater navigation. Trained a real-time YOLO pipeline, led the Kubernetes deployment of ROS services across Raspberry Pi and NVIDIA Jetson Xavier, and built the team site in React + TypeScript.",
    image: '/images/robosub-site.jpg',
  },
  {
    role: 'Math Peer Mentor',
    org: 'C.E.N.T.R.I.C. (Viterbi & Dornsife)',
    date: 'Aug — Dec 2025',
    blurb:
      'Helped launch a mentoring program for first-generation and transfer students, coordinating with 30+ professors and staff and running mentor matching, scheduling, and outreach.',
    logo: '/images/centric-logo.png',
  },
  {
    role: 'Community Engagement Ambassador',
    org: 'Didi Hirsch Mental Health Services',
    orgHref: 'https://didihirsch.org',
    date: 'May 2026 — Present',
    blurb:
      'On the Outreach Team, connecting people with mental health resources at community events like the Sacred Music & Healing Festival and WeHo Pride — working to reduce stigma by making it easier, and more normal, to ask for help.',
    image: '/images/didihirsch-outreach.jpg',
  },
  {
    role: 'Crisis Counselor',
    org: 'Didi Hirsch Mental Health Services',
    orgHref: 'https://didihirsch.org',
    date: 'May 2025 — Jan 2026',
    blurb:
      'Completed the 988 Suicide & Crisis Lifeline counselor training and supported people in emotional distress on the national crisis line — trained in active listening, empathy, and crisis intervention.',
    logo: '/images/didihirsch-logo.svg',
  },
];

export const METRICS = [
  { num: '20,000+', label: 'Students impacted' },
  { num: '0.90', label: 'Detection mAP' },
  { num: '5+', label: 'ROS packages' },
  { num: '2', label: 'Detection models' },
  { num: '30+', label: 'Faculty collaborators' },
];

export const STACK = [
  'Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript', 'React', 'HTML/CSS',
  'MATLAB', 'ROS', 'Kubernetes', 'Docker', 'OpenAI API', 'YOLO', 'RT-DETR',
  'OpenCV', 'WordPress', 'Java Servlets', 'Git', 'OnShape', 'AutoCAD',
];
