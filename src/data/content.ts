// Single source of truth for page content.

export interface Role {
  role: string;
  org: string;
  orgHref?: string;
  date: string;
  blurb: string;
  tags: string[];
  summary?: string;
  media?: { src: string; kind: 'shot' | 'photo' | 'logo' | 'icp'; alt: string; embed?: boolean };
}

export const CURRENT_ROLES: Role[] = [
  {
    role: 'Software Lead',
    org: 'PTDrone (CSCI 401 Capstone)',
    orgHref: 'https://ptdrone.tech',
    date: 'Aug 2026 — Present',
    blurb:
      "Lead a five-person team building for an outside stakeholder: scope and ship the public site, the drone ground-control station, and the on-demand manufacturing flow. Modeled the Microfactory in Blender (the one you can peel open below) and run the Next.js + Render pipeline with preview-branch gating.",
    tags: ['Next.js', 'TypeScript', 'Blender', 'Render', 'Leadership'],
    summary: 'team of 5 · stakeholder-facing · ptdrone.tech',
    media: { src: '/images/ptdrone-site.jpg', kind: 'shot', alt: 'PTDrone website (ptdrone.tech) homepage' },
  },
  {
    role: 'AI Engineer',
    org: 'USC Industry Collaboration Program',
    date: 'Sep 2026 — Present',
    blurb:
      "Sole AI engineer on a student team automating a core internal workflow for a Canadian construction company, requirements to delivery (details under NDA).",
    tags: ['AI Engineering', 'LLMs', 'Product'],
    summary: 'sole AI engineer · NDA client',
    media: { src: '/images/usc-logo.png', kind: 'icp', alt: 'USC Industry Collaboration Program: AI for a construction company' },
  },
  {
    role: 'Software Lead',
    org: 'USC RoboSub',
    orgHref: 'https://uscfrl.com',
    date: 'Jan 2025 — Present',
    blurb:
      "Lead a 5–10 engineer team on the AUV's full autonomy stack (ROS 2, Jetson). Migrated 10,000+ lines ROS 1 → ROS 2, took detection mAP 0.40 → 0.90 with YOLO + RT-DETR on TensorRT, shipped GTSAM SLAM holding every landmark under 0.3 m, and retuned the CUDA MPPI controller after root-causing a 12 N thrust clamp from 75 GB of wet-test data.",
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
      "Own the platform serving 20,000+ students. Built automated Funding, Senate Bill, and Legislative trackers that made $352K of spending searchable and cut manual reporting 95%; ship front-end features on the WordPress site.",
    tags: ['JavaScript', 'WordPress', 'Leadership'],
    summary: '20,000+ students · $352K made searchable',
    media: { src: '/images/usg-site.jpg', kind: 'shot', alt: 'USG website (usg.usc.edu) homepage' },
  },
  {
    role: 'Web Lead & Peer Mentor',
    org: 'C.E.N.T.R.I.C. · USC MESA University Program',
    orgHref: 'https://mesa-u.usc.edu/',
    date: 'Aug 2025 — Present',
    blurb:
      "Redesigned the program's website end to end — new information architecture, eligibility check, enrollment flow, and resource pages — and mentor first-generation and transfer students in the inaugural cohort.",
    tags: ['Web Design', 'WordPress', 'Mentorship'],
    summary: 'full site redesign · mesa-u.usc.edu',
    media: { src: '/images/mesa-site.jpg', kind: 'shot', alt: 'USC MESA University Program website homepage, redesigned', embed: false },
  },
];

export const PAST_ROLES: Role[] = [];

export const VOLUNTEERING: Role[] = [];

export interface Project {
  name: string;
  subtitle: string;
  status?: 'live';
  blurb: string;
  tech: string[];
  href: string;
  viz?: 'gtsam' | 'rag' | 'ptdrone' | 'parley' | 'shroom' | 'postcards' | 'anchor';
}

export const TECHNICAL_PROJECTS: Project[] = [
  {
    name: 'RoboSub Autonomy Stack',
    subtitle: 'Autonomous Underwater Vehicle',
    blurb:
      "On-vehicle detection (YOLO + RT-DETR → ONNX → TensorRT, mAP 0.40 → 0.90) and GTSAM factor-graph SLAM validated under 0.3 m on rosbag replay. The detector below is the real one, running in your browser.",
    tech: ['Python', 'ROS 2', 'YOLO', 'RT-DETR', 'TensorRT', 'GTSAM'],
    href: 'https://uscfrl.com',
    viz: 'gtsam',
  },
  {
    name: 'Ask USG',
    subtitle: 'Production RAG Chatbot',
    status: 'live',
    blurb:
      "Production RAG for 20,000+ students: hybrid BM25 + pgvector retrieval, sibling-chunk expansion, SSE streaming, LangGraph tool routing. Answer quality 83% → 95% on 1,100 real beta questions; time-to-first-token 6.2 s → 0.5 s.",
    tech: ['Python', 'Node/Express', 'OpenAI', 'pgvector', 'LangGraph', 'Docker'],
    href: 'https://arsalanghogari.github.io/usc-usg-ai-chatbot/',
    viz: 'rag',
  },
  {
    name: 'PTDrone',
    subtitle: 'Drone Ground Control & Manufacturing Cell (Capstone)',
    status: 'live',
    blurb:
      "Capstone with an outside stakeholder: drone ground-control station, a parts chatbot that triggers on-demand manufacturing, and a simulated manufacturing cell. Next.js static export on Render with preview-branch gating.",
    tech: ['Next.js', 'React', 'TypeScript', 'Render'],
    href: 'https://ptdrone.tech',
    viz: 'ptdrone',
  },
  {
    name: 'Parley',
    subtitle: 'AI Voice Negotiation Agent',
    blurb:
      "Solo hackathon build: a voice agent that finds vendors via Google Places, phones them, and negotiates with competing bids as leverage. Real $2,400 → $2,250 result, honesty tripwires in code, 41 CI-gated tests.",
    tech: ['Next.js', 'TypeScript', 'ElevenLabs', 'GPT-4o', 'Supabase'],
    href: 'https://github.com/arsalanghogari/the-negotiator',
    viz: 'parley',
  },
  {
    name: 'Shroom',
    subtitle: 'AI Seasoning Carousel',
    blurb:
      "ESP32-driven seasoning carousel with a React UI; GPT pairs what's on hand with a meal and spins to the jar.",
    tech: ['React', 'Tailwind', 'GPT', 'ESP32'],
    href: 'https://drive.google.com/file/d/1geMPfQZohkX4E7bFGYwr2OUo8J_A4Rq-/view?usp=sharing',
    viz: 'shroom',
  },
  {
    name: 'Postcards from Bristol',
    subtitle: 'Interactive 3D Photo Carousel',
    status: 'live',
    blurb:
      "Drag-to-spin 3D photo carousel in vanilla JS, pointer and keyboard driven, from my exchange semester.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://arsalanghogari.com/postcards-from-bristol/',
    viz: 'postcards',
  },
  {
    name: 'AnchorNotes',
    subtitle: 'Collaborative Note-Taking App',
    blurb:
      "Android note-map app, top 2 of 37 teams. 70% faster than peers via Profiler-guided optimization, thread offloading, and indexing.",
    tech: ['Java', 'XML', 'Android Studio'],
    href: 'https://github.com/arsalanghogari/AnchorNotes',
    viz: 'anchor',
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
  honors: ['3.9 GPA', 'Presidential Scholar', 'Viterbi Scholar', 'W.V.T. Rusch Honors'],
};
