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
    role: 'Software Lead',
    org: 'USC RoboSub',
    orgHref: 'https://uscfrl.com',
    date: 'Jan 2025 — Present',
    blurb:
      "Promoted 3× in 18 months (Software Engineer → Perception Lead → Software Lead); now direct a 5–10 engineer team owning the AUV's full autonomy stack — vision, SLAM, planning, controls, and mission control. More than doubled underwater detection accuracy (mAP 0.40 → 0.90) by building the annotated dataset and training YOLO + RT-DETR with TensorRT on-vehicle inference, migrated a 10,000+ line ROS 1 codebase to ROS 2, delivered GTSAM-based SLAM validated to under 0.3 m error, and turned 75 GB of in-water test data into root-cause fixes worth 40% of top speed.",
    tags: ['Python', 'C++', 'ROS 2', 'PyTorch', 'TensorRT', 'Kubernetes'],
    summary: 'mAP 0.40 → 0.90 · leading 5–10 engineers',
    media: { src: '/images/robosub-site.jpg', kind: 'shot', alt: 'USC AUV / RoboSub team site (uscfrl.com) homepage' },
  },
  {
    role: 'Director of Digital Strategy',
    org: 'USC Undergraduate Student Government',
    orgHref: 'https://usg.usc.edu',
    date: 'May 2025 — Present',
    blurb:
      "Own the digital platform serving 20,000+ undergraduates and lead a 2–3 person digital team — re-appointed for a second year. Made $352K in student-government spending publicly searchable with automated Funding, Senate Bill, and Legislative trackers (cutting manual reporting ~95% across 40+ organizations), grew USG's Instagram 25% with an analytics-driven content strategy, and built Ask USG, the organization's AI assistant, slated for campus-wide launch in Fall 2026.",
    tags: ['JavaScript', 'WordPress', 'RAG', 'Leadership'],
    summary: '20,000+ students · $352K made searchable',
    media: { src: '/images/usg-site.jpg', kind: 'shot', alt: 'USG website (usg.usc.edu) homepage' },
  },
];

export const PAST_ROLES: Role[] = [
  {
    role: 'Math Peer Mentor',
    org: 'C.E.N.T.R.I.C. (Viterbi & Dornsife)',
    date: 'Aug — Dec 2025',
    blurb:
      "Mentored 5 first-generation and transfer students in the program's inaugural cohort, coordinating with 30+ professors, advisors, and residential staff and building the program's application-tracking, mentor-matching, and scheduling workflows.",
    tags: ['Mentorship', 'Coordination'],
    summary: 'inaugural cohort · 30+ faculty & staff',
    media: { src: '/images/centric-logo.png', kind: 'logo', alt: 'C.E.N.T.R.I.C. program logo' },
  },
];

export const VOLUNTEERING: Role[] = [
  {
    role: 'Community Engagement Ambassador',
    org: 'Didi Hirsch Mental Health Services',
    orgHref: 'https://didihirsch.org',
    date: 'May 2026 — Present',
    blurb:
      'Rejoined after a semester abroad, now on the Outreach Team — connecting people with mental health resources at community events like the Sacred Music & Healing Festival and WeHo Pride, expanding community awareness of crisis resources and making it easier, and more normal, to ask for help.',
    tags: ['Outreach', 'Communication'],
    summary: 'mental-health outreach at LA events',
    media: { src: '/images/didihirsch-outreach.jpg', kind: 'photo', alt: 'Didi Hirsch outreach team at a community Pride event' },
  },
  {
    role: 'Crisis Counselor',
    org: 'Didi Hirsch Mental Health Services',
    orgHref: 'https://didihirsch.org',
    date: 'May 2025 — Jan 2026',
    blurb:
      'Completed 50+ hours of intensive crisis-intervention training and served a weekly suicide-prevention shift on the national 988 Lifeline — volunteering near-daily over winter break and answering 100+ crisis calls with active listening and de-escalation.',
    tags: ['Crisis Intervention', 'Active Listening'],
    summary: '100+ crisis calls · 50+ hours of training',
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
    name: 'RoboSub Autonomy Stack',
    subtitle: 'Autonomous Underwater Vehicle',
    blurb:
      'Real-time underwater detection and SLAM for the AUV — custom datasets built from ROS bags, YOLO + RT-DETR compiled ONNX → TensorRT for on-vehicle inference (detection mAP 0.40 → 0.90), and GTSAM factor-graph navigation validated to under 0.3 m absolute error on rosbag replay.',
    tech: ['Python', 'ROS 2', 'YOLO', 'RT-DETR', 'TensorRT', 'GTSAM'],
    href: 'https://uscfrl.com',
  },
  {
    name: 'Ask USG',
    subtitle: 'Production RAG Chatbot',
    status: 'live',
    blurb:
      'Production RAG chatbot for USC student government — auto-ingests all 97 USG site pages weekly, lifted answer quality 83% → 95% in a 1,100+ question beta, retrieval MRR 0.91 → 0.98, time-to-first-token 6.2 s → 0.5 s, and a LangGraph agent at 100% tool-selection accuracy. Slated for campus-wide launch to 20,000+ students in Fall 2026.',
    tech: ['Python', 'Node/Express', 'OpenAI', 'pgvector', 'LangGraph', 'Docker'],
    href: 'https://arsalanghogari.github.io/usc-usg-ai-chatbot/',
  },
  {
    name: 'Parley',
    subtitle: 'AI Voice Negotiation Agent',
    blurb:
      'Solo build for the ElevenLabs × Hack-Nation Global AI Hackathon: a voice agent that discovers vendors via live Google Places, phones them, negotiates using competing bids as leverage, and books the winner — producing a genuine $2,400 → $2,250 price drop, with in-code honesty tripwires and 41 CI-gated tests.',
    tech: ['Next.js', 'TypeScript', 'ElevenLabs', 'GPT-4o', 'Supabase'],
    href: 'https://github.com/arsalanghogari',
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
      'Selected as a top-2 implementation out of 37 teams for an original note-map visualization — delivered an app 70% faster than peers via Android Profiler-guided optimization, thread offloading, and database indexing.',
    tech: ['Java', 'XML', 'Android Studio'],
    href: 'https://github.com/arsalanghogari/AnchorNotes',
  },
];

// Non-technical projects & skills — framed skills-forward.
export const NON_TECHNICAL = [
  {
    name: 'Crisis Intervention',
    blurb:
      '988 Suicide & Crisis Lifeline trained (50+ hours). 100+ crisis calls answered with active listening, de-escalation, and composure in high-stakes conversations.',
  },
  {
    name: 'Community Outreach',
    blurb:
      'Connecting people with mental-health resources at large community events — meeting people where they are and reducing stigma.',
  },
  {
    name: 'Mentorship & Program-Building',
    blurb:
      "Mentored first-gen and transfer students in C.E.N.T.R.I.C.'s inaugural cohort, coordinating across 30+ faculty and staff.",
  },
  {
    name: 'Digital Strategy & Leadership',
    blurb:
      'Owning a platform used by 20,000+ students and leading engineer teams of 2–10 — translating organizational needs into shipped features.',
  },
];

export const TECH_SKILLS = [
  'Python', 'C++', 'CUDA', 'Java', 'JavaScript', 'TypeScript', 'MATLAB',
  'PyTorch', 'TensorRT', 'ONNX', 'ROS 2', 'GTSAM', 'NVIDIA Isaac Sim', 'OpenCV',
  'React', 'Next.js', 'Node/Express', 'PostgreSQL', 'pgvector', 'LangGraph',
  'Supabase', 'WordPress', 'Docker', 'K3s', 'GitHub Actions', 'Git',
  'OnShape', 'AutoCAD',
];

export const EDUCATION = {
  school: 'University of Southern California',
  degree: 'B.S. Computer Science + Business Administration',
  detail: 'Viterbi School of Engineering & Marshall School of Business · Minor in AI Applications',
  exchange: 'Study Abroad — University of Bristol, UK (Spring 2026)',
  honors: ['3.9 GPA', 'SAT 1550', 'Presidential Scholar', 'Viterbi Scholar', "Dean's List", 'W.V.T. Rusch Honors'],
};
