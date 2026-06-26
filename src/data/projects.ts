// Project case studies — single source of truth for the engineering page,
// the home "featured work" section, and the robotics page.

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  status?: 'live';
  featured?: boolean;
  robotics?: boolean;
  problem: string;
  role: string[];
  tech: string[];
  impact: string[];
  links: { label: string; href: string }[];
  image?: string; // screenshot in /public/images
}

export const PROJECTS: Project[] = [
  {
    slug: 'robosub',
    title: 'RoboSub',
    subtitle: 'Autonomous Underwater Vehicle',
    year: '2024 — Present',
    featured: true,
    robotics: true,
    problem:
      'Underwater robots struggle to reliably detect objects because of poor lighting, color attenuation, and water distortion — the conditions that make most off-the-shelf vision models fail.',
    role: ['Perception Lead', 'Navigation', 'Mission Logic'],
    tech: ['Python', 'ROS', 'Docker', 'YOLO', 'RT-DETR', 'OpenCV', 'Kubernetes'],
    impact: [
      'Improved detection mAP from 0.70 → 0.90',
      'Integrated vision into the SLAM / navigation stack',
      'Built the real-time ROS perception pipeline',
      'Created custom datasets from recorded ROS bags',
      'Deployed ROS services across Raspberry Pi + NVIDIA Jetson Xavier with Kubernetes',
    ],
    links: [{ label: 'Team site ↗', href: 'https://uscfrl.com' }],
    image: '/images/robosub-site.jpg',
  },
  {
    slug: 'usg-ai-chatbot',
    title: 'USC USG AI Chatbot',
    subtitle: 'Retrieval-Augmented Campus Assistant',
    year: '2025',
    status: 'live',
    featured: true,
    problem:
      'Students could not easily find campus resources scattered across dozens of USG pages — the information existed, but nobody could surface the right answer quickly.',
    role: ['Design', 'Ingestion pipeline', 'Retrieval'],
    tech: ['Python', 'OpenAI Embeddings', 'RAG', 'Semantic Search'],
    impact: [
      'Answers campus-resource questions for a 20,000+ student body',
      'Structured website-ingestion pipeline for semantic search',
      'Retrieval-augmented generation over USG content',
    ],
    links: [
      { label: 'Live demo ↗', href: 'https://arsalanghogari.github.io/usc-usg-ai-chatbot/' },
    ],
  },
  {
    slug: 'shroom',
    title: 'Shroom',
    subtitle: 'AI Seasoning Carousel',
    year: '2025',
    featured: true,
    problem:
      'Cooking with whatever is already in the kitchen is hard when you do not know what pairs well — especially for people new to cooking.',
    role: ['Hardware', 'Frontend', 'AI integration'],
    tech: ['React', 'Tailwind', 'GPT', 'ESP32'],
    impact: [
      'Pairs an ESP32 microcontroller with a React UI',
      'Suggests meals and spice combinations from on-hand ingredients',
      'Built to make cooking more accessible',
    ],
    links: [
      {
        label: 'Overview ↗',
        href: 'https://drive.google.com/file/d/1geMPfQZohkX4E7bFGYwr2OUo8J_A4Rq-/view?usp=sharing',
      },
    ],
  },
  {
    slug: 'anchornotes',
    title: 'AnchorNotes',
    subtitle: 'Collaborative Note-Taking App',
    year: '2024',
    problem:
      'Students taking notes together need real-time sync and persistence without friction — most class apps lose work or lag behind.',
    role: ['Android', 'Realtime sync', 'Storage'],
    tech: ['Java', 'XML', 'Android Studio'],
    impact: [
      'Real-time collaborative Android notes with persistent storage',
      'Selected as a top-2 implementation out of 37 teams',
      'Presented to the class',
    ],
    links: [{ label: 'GitHub ↗', href: 'https://github.com/arsalanghogari/AnchorNotes' }],
  },
  {
    slug: 'travel-itinerary',
    title: 'AI Travel Itinerary Generator',
    subtitle: 'Personalized Trip Planning',
    year: '2024',
    problem:
      'Planning a multi-day trip means juggling interests, time, and geography — tedious to do well by hand.',
    role: ['Backend', 'AI integration'],
    tech: ['Java Servlets', 'Gemini API'],
    impact: [
      'Generates day-by-day plans from interests, trip length, and destination',
      'Powered by the Gemini API',
    ],
    links: [{ label: 'GitHub ↗', href: 'https://github.com/arsalanghogari' }],
  },
];

export const featured = PROJECTS.filter((p) => p.featured);
