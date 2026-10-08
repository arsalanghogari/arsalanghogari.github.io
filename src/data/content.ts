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
    role: 'Software Engineer Intern',
    org: 'Matha Labs',
    orgHref: 'https://www.mathalabs.com',
    date: 'Jun 2026 — Present',
    blurb:
      "Replaced AWS Cognito's hosted UI on humanhud.ai (Next.js/TypeScript, static export on S3 + CloudFront) with a branded in-site sign-in — password and email one-time-code factors, account confirmation and reset, and Google SSO over browser PKCE with callback-state validation. Shipped the signed-in dashboard and its five action commands (receipt and nutrition-label scanning, weight logging) with opt-in on-device OCR, contributed to the SwiftUI iOS app for Meta Ray-Ban Display glasses (HealthKit, Vision OCR, Plaid via Lambda/DynamoDB), and wired Stripe payments, Cognito accounts, and a correctness pass over core trading logic for Prosperity, a copy-trading platform.",
    tags: ['Next.js', 'TypeScript', 'AWS', 'SwiftUI', 'Stripe'],
    summary: 'auth, dashboard, iOS HUD · humanhud.ai',
  },
  {
    role: 'AI Engineer',
    org: 'USC Industry Collaboration Program',
    date: 'Sep 2026 — Present',
    blurb:
      'Only AI engineer on a cross-functional student team building internal software for a Canadian construction company (details under NDA). Own the AI engineering for automating a core internal workflow, from requirements to delivery.',
    tags: ['AI Engineering', 'LLMs', 'Product'],
    summary: 'sole AI engineer · NDA client',
  },
  {
    role: 'Software Lead',
    org: 'USC RoboSub',
    orgHref: 'https://uscfrl.com',
    date: 'Jan 2025 — Present',
    blurb:
      "Promoted 4× in 18 months (Software Engineer → Perception Lead → Perception & Autonomy Lead → Software Lead); now direct 5–10 engineers across the AUV's vision, SLAM, planning, and mission-control stack (ROS 2, NVIDIA Jetson). Migrated the inherited 10,000+ line ROS 1 codebase to ROS 2, more than doubled underwater detection accuracy (mAP 0.40 → 0.90) by building the dataset and training YOLO + RT-DETR compiled to TensorRT (FP16/INT8) for real-time on-vehicle inference, delivered GTSAM-based SLAM fusing stereo, IMU, DVL, and depth (every landmark under 0.3 m error on rosbag replay), and root-caused the AUV's sluggish surge from 75 GB of wet-test data to a thrust clamp set at 12 N instead of 30 N — then retuned the GPU-parallel MPPI controller (CUDA/C++).",
    tags: ['Python', 'C++', 'CUDA', 'ROS 2', 'PyTorch', 'TensorRT', 'GTSAM'],
    summary: 'mAP 0.40 → 0.90 · leading 5–10 engineers',
    media: { src: '/images/robosub-site.jpg', kind: 'shot', alt: 'USC AUV / RoboSub team site (uscfrl.com) homepage' },
  },
  {
    role: 'Director of Digital Strategy',
    org: 'USC Undergraduate Student Government',
    orgHref: 'https://usg.usc.edu',
    date: 'May 2025 — Present',
    blurb:
      "Own USG's digital infrastructure serving 20,000+ students, shipping front-end features on the official WordPress site (dynamic announcements, interactive election interfaces) — invited back for a second year. Made $352K in student-government spending publicly searchable across 40+ organizations, assemblies, and committees, cutting manual reporting 95% with automated Senate Bill, Legislative Project, and Funding trackers.",
    tags: ['JavaScript', 'WordPress', 'Leadership'],
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
      "Production RAG chatbot for USC's 20,000+ undergraduates — unifies 97 auto-discovered site pages, two multi-tab Google Sheets, and a live Google Calendar on a weekly GitHub Actions schedule. Lifted answer quality 83% → 95% via an eval pipeline built from 1,100 real beta questions, swapped pure vector search for hybrid BM25 + pgvector retrieval, cut time-to-first-token 92% (6.2 s → 0.5 s) with SSE streaming, and extended it into a LangGraph agent with crisis/academic-integrity guardrails and prompt-injection hardening. Campus-wide launch Fall 2026.",
    tech: ['Python', 'Node/Express', 'OpenAI', 'pgvector', 'LangGraph', 'Docker'],
    href: 'https://arsalanghogari.github.io/usc-usg-ai-chatbot/',
  },
  {
    name: 'PTDrone',
    subtitle: 'Drone Ground Control & Manufacturing Cell (Capstone)',
    status: 'live',
    blurb:
      'Lead a five-person CSCI 401 team building, for an outside stakeholder, a drone ground control station, an AI chatbot that answers parts questions and triggers on-demand manufacturing, and a simulated manufacturing cell. Set up the production pipeline: Next.js static export on Render with preview-branch review gating deploys.',
    tech: ['Next.js', 'React', 'TypeScript', 'Render'],
    href: 'https://ptdrone.tech',
  },
  {
    name: 'Parley',
    subtitle: 'AI Voice Negotiation Agent',
    blurb:
      'Solo build for the ElevenLabs × Hack-Nation Global AI Hackathon: a voice agent that discovers vendors via live Google Places, phones them, negotiates using competing bids as leverage, and books the winner — producing a genuine $2,400 → $2,250 price drop, with in-code honesty tripwires and 41 CI-gated tests.',
    tech: ['Next.js', 'TypeScript', 'ElevenLabs', 'GPT-4o', 'Supabase'],
    href: 'https://github.com/arsalanghogari/the-negotiator',
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
  'Python', 'C++', 'CUDA', 'Java', 'JavaScript', 'TypeScript', 'Swift', 'C', 'MATLAB',
  'OpenAI API', 'LangGraph', 'Langfuse', 'RAG', 'ROS 2', 'PyTorch', 'TensorRT', 'ONNX', 'GTSAM', 'NVIDIA Isaac Sim',
  'React', 'Next.js', 'Node/Express', 'SwiftUI', 'PostgreSQL', 'pgvector', 'AWS', 'Stripe', 'WordPress',
  'Render', 'Docker', 'K3s', 'GitHub Actions', 'Git', 'Linux/Bash',
];

export const EDUCATION = {
  school: 'University of Southern California',
  degree: 'B.S. Computer Science + Business Administration · Expected May 2027',
  detail: 'Viterbi School of Engineering & Marshall School of Business · Minor in AI Applications',
  exchange: 'Study Abroad — University of Bristol, UK (Spring 2026)',
  honors: ['3.9 GPA', 'SAT 1550', 'Presidential Scholar', 'Viterbi Scholar', "Dean's List", 'W.V.T. Rusch Honors', 'Thematic Option Honors'],
};
