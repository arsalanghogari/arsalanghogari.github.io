// Single source of truth for page content.

export interface Role {
  role: string;
  org: string;
  orgHref?: string;
  date: string;
  blurb: string;
  tags: string[];
  summary?: string;
  media?: { src: string; kind: 'shot' | 'photo' | 'logo'; alt: string };
}

export const CURRENT_ROLES: Role[] = [
  {
    role: 'Director of Digital Strategy',
    summary: 'web platform for 20,000+ students',
    org: 'USC Undergraduate Student Government',
    orgHref: 'https://usg.usc.edu',
    date: 'May 2025 — Present',
    blurb:
      'Run the official USG website serving 20,000+ students — front-end features in HTML/CSS/JS, a dynamic announcements system, interactive election interfaces, and Legislative / Senate Bill / Funding trackers. Kicked off an AI campus-resource chatbot with OpenAI embeddings + RAG. Asked back for a second year.',
    tags: ['React', 'JavaScript', 'RAG', 'Leadership'],
    media: { src: '/images/usg-site.jpg', kind: 'shot', alt: 'USG website (usg.usc.edu) homepage' },
  },
  {
    role: 'Perception Lead / Software Engineer',
    summary: 'underwater CV, mAP 0.70 → 0.90',
    org: 'USC RoboSub',
    orgHref: 'https://uscfrl.com',
    date: 'Jan 2025 — Present',
    blurb:
      "Lead the autonomous sub's perception stack — computer vision and sonar-based object detection for underwater navigation. Trained a real-time YOLO pipeline (mAP 0.70 → 0.90), led the Kubernetes deployment of ROS services across Raspberry Pi + NVIDIA Jetson Xavier, and built the team site in React + TypeScript.",
    tags: ['Python', 'ROS', 'YOLO', 'Kubernetes'],
    media: { src: '/images/robosub-site.jpg', kind: 'shot', alt: 'USC AUV / RoboSub team site (uscfrl.com) homepage' },
  },
];

export const PAST_ROLES: Role[] = [
  {
    role: 'Math Peer Mentor',
    summary: 'mentoring first-gen & transfer students',
    org: 'C.E.N.T.R.I.C. (Viterbi & Dornsife)',
    date: 'Aug — Dec 2025',
    blurb:
      'Helped launch a mentoring program for first-generation and transfer students, coordinating with 30+ professors and staff and running mentor matching, scheduling, and outreach.',
    tags: ['Mentorship', 'Coordination'],
    media: { src: '/images/centric-logo.png', kind: 'logo', alt: 'C.E.N.T.R.I.C. program logo' },
  },
];

export const VOLUNTEERING: Role[] = [
  {
    role: 'Community Engagement Ambassador',
    summary: 'mental-health outreach at LA events',
    org: 'Didi Hirsch Mental Health Services',
    orgHref: 'https://didihirsch.org',
    date: 'May 2026 — Present',
    blurb:
      'On the Outreach Team, connecting people with mental health resources at community events like the Sacred Music & Healing Festival and WeHo Pride — reducing stigma by making it easier, and more normal, to ask for help.',
    tags: ['Outreach', 'Communication'],
    media: { src: '/images/didihirsch-outreach.jpg', kind: 'photo', alt: 'Didi Hirsch outreach team at a community Pride event' },
  },
  {
    role: 'Crisis Counselor',
    summary: '988 crisis-line support',
    org: 'Didi Hirsch Mental Health Services',
    orgHref: 'https://didihirsch.org',
    date: 'May 2025 — Jan 2026',
    blurb:
      'Completed 988 Suicide & Crisis Lifeline counselor training and supported people in emotional distress on the national crisis line — active listening, de-escalation, and crisis intervention in high-stakes conversations.',
    tags: ['Crisis Intervention', 'Active Listening'],
    media: { src: '/images/didihirsch-logo.svg', kind: 'logo', alt: 'Didi Hirsch Mental Health Services logo' },
  },
];

export interface Project {
  name: string;
  subtitle: string;
  status?: 'live';
  blurb: string;
  tech: string[];
  href: string;
}

export const TECHNICAL_PROJECTS: Project[] = [
  {
    name: 'RoboSub Perception',
    subtitle: 'Autonomous Underwater Vehicle',
    blurb:
      'Real-time underwater object detection feeding the SLAM / navigation stack. Built the ROS pipeline and custom datasets from recorded ROS bags; improved detection mAP from 0.70 → 0.90.',
    tech: ['Python', 'ROS', 'YOLO', 'RT-DETR', 'OpenCV', 'Kubernetes'],
    href: 'https://uscfrl.com',
  },
  {
    name: 'USG AI Chatbot',
    subtitle: 'Retrieval-Augmented Campus Assistant',
    status: 'live',
    blurb:
      'A retrieval-augmented chatbot that helps 20,000+ students find campus resources, using OpenAI embeddings and a structured website-ingestion pipeline for semantic search.',
    tech: ['Python', 'Embeddings', 'RAG'],
    href: 'https://arsalanghogari.github.io/usc-usg-ai-chatbot/',
  },
  {
    name: 'Shroom',
    subtitle: 'AI Seasoning Carousel',
    blurb:
      'An interactive, AI-powered seasoning carousel that pairs an ESP32 microcontroller with a React UI to suggest meals and spice combinations from whatever is on hand.',
    tech: ['React', 'Tailwind', 'GPT', 'ESP32'],
    href: 'https://drive.google.com/file/d/1geMPfQZohkX4E7bFGYwr2OUo8J_A4Rq-/view?usp=sharing',
  },
  {
    name: 'Postcards from Bristol',
    subtitle: 'Interactive 3D Photo Carousel',
    status: 'live',
    blurb:
      'A drag-to-spin 3D photo carousel documenting my exchange semester — built as an incoming Bristol ambassador for the USC study-abroad team, with pointer/touch dragging and arrow-key navigation in vanilla JS.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://arsalanghogari.com/postcards-from-bristol/',
  },
  {
    name: 'AnchorNotes',
    subtitle: 'Collaborative Note-Taking App',
    blurb:
      'A real-time collaborative Android notes app with persistent storage — picked as a top-2 implementation out of 37 teams and presented to the class.',
    tech: ['Java', 'XML', 'Android Studio'],
    href: 'https://github.com/arsalanghogari/AnchorNotes',
  },
  {
    name: 'AI Travel Itinerary Generator',
    subtitle: 'Personalized Trip Planning',
    blurb:
      'Generates personalized day-by-day travel plans from your interests, trip length, and destination, powered by the Gemini API.',
    tech: ['Java Servlets', 'Gemini API'],
    href: 'https://github.com/arsalanghogari',
  },
];

// Non-technical projects & skills — framed skills-forward.
export const NON_TECHNICAL = [
  {
    name: 'Crisis Intervention',
    blurb:
      '988 Suicide & Crisis Lifeline trained. Active listening, de-escalation, and staying composed in high-stakes conversations.',
  },
  {
    name: 'Community Outreach',
    blurb:
      'Connecting people with mental-health resources at large community events — meeting people where they are and reducing stigma.',
  },
  {
    name: 'Mentorship & Program-Building',
    blurb:
      'Helped launch a mentoring program for first-gen and transfer students, coordinating across 30+ faculty and staff.',
  },
  {
    name: 'Digital Strategy & Leadership',
    blurb:
      'Owning a platform used by a 20,000-student body — translating organizational needs into shipped features.',
  },
];

export const TECH_SKILLS = [
  'Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript', 'React', 'HTML/CSS',
  'MATLAB', 'ROS', 'Kubernetes', 'Docker', 'OpenAI API', 'YOLO', 'RT-DETR',
  'OpenCV', 'WordPress', 'Java Servlets', 'Git', 'OnShape', 'AutoCAD',
];

export const EDUCATION = {
  school: 'University of Southern California',
  degree: 'B.S. Computer Science + Business Administration',
  detail: "Viterbi School of Engineering & Marshall School of Business · specializing in AI Applications",
  exchange: 'Exchange — University of Bristol, UK (Spring 2026)',
  honors: ['3.9 GPA', 'Presidential Scholar', 'Viterbi Scholar', "Dean's List"],
};
