export const YEARS_EXPERIENCE = "4.5";

export const ABOUT_DETAILS = {
  text1: "Hi, I am Ashish Upadhyay, a ",
  text2: "SOFTWARE DEVELOPER",
  short:
    "who grew from frontend developer to full-stack feature owner. I lead features end to end with an AI-native workflow (research, planning, API specs, backend and frontend delivery) and back the speed with tests, quality gates and secure coding.",
  text3:
    "with strong full-stack capabilities, experienced in building scalable, production-grade applications end-to-end. I specialize in crafting high-performance React interfaces while working seamlessly across APIs, backend services, and cloud infrastructure to ensure reliability, security, and smooth user experiences. My work involves translating complex system workflows into intuitive frontend solutions while contributing to the underlying architecture — enabling platforms that are not only visually polished, but also robust, efficient, and built to perform at scale.",
};

export type ProjectCategory = "fullstack" | "ml";

export const PROJECT_FILTERS: { id: "all" | ProjectCategory; label: string }[] =
  [
    { id: "all", label: "All" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ml", label: "AI / ML" },
  ];

export const PROJECTS: {
  name: string;
  tag: string;
  category: ProjectCategory;
  status: "active" | "archived";
  summary: string;
  highlight: string;
  features?: string[];
  techStack: string[];
  url?: string;
  resume?: string[];
}[] = [
  {
    name: "Element Stack",
    tag: "Frontend interview prep",
    category: "fullstack",
    status: "active",
    summary:
      "An interactive platform for frontend interview preparation: a library of machine coding problems that you solve in an IDE-like workspace, right in the browser.",
    highlight:
      "Actively in development, with DSA problems and peer code collaboration being added.",
    features: [
      "Instant coding sandbox with a virtual file system and live preview",
      "A growing library of machine coding problems, from Todo lists and autocomplete to Kanban boards and chat interfaces",
      "Filter by difficulty (Easy, Medium, Hard) and by topic such as state management, performance and accessibility",
      "Solve in React or vanilla JavaScript, with ready-made boilerplates",
    ],
    techStack: ["Next.js", "React", "In-browser sandbox"],
    url: "https://elementstack.vercel.app/",
    resume: [
      "Building an interactive frontend interview-prep platform with a growing library of machine coding problems.",
      "IDE-like in-browser workspace with a virtual file system, live preview and React or vanilla JS boilerplates; problems filterable by difficulty and topic.",
    ],
  },
  {
    name: "Code Editor (SaaS IDE)",
    tag: "Full stack",
    category: "fullstack",
    status: "archived",
    summary:
      "A browser-based IDE supporting JavaScript, Python, Go, C++ and Java, with a collaborative project platform that offers sequential handoffs and shared progress.",
    highlight:
      "Handles 1K+ concurrent code executions, with secure containerised execution in Golang for isolated runtimes.",
    techStack: ["Next.js", "Golang", "WebSocket", "PostgreSQL", "Docker"],
    resume: [
      "Built a browser-based IDE supporting JS, Python, Go, C++ and Java, handling 1K+ concurrent executions.",
      "Developed a collaborative project platform with sequential handoffs and shared progress, with secure containerised execution in Golang.",
    ],
  },
  {
    name: "Samvad",
    tag: "Full stack",
    category: "fullstack",
    status: "archived",
    summary:
      "A responsive web app for real-time 1-on-1 chat with friends, built on WebSockets for seamless live communication.",
    highlight:
      "OTP-based password recovery cut login issues by 25%, and WebSockets improved chat responsiveness by 30%.",
    techStack: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    name: "Face Mask Detector",
    tag: "Computer vision",
    category: "ml",
    status: "archived",
    summary:
      "A real-time computer vision system that monitors mask compliance with a two-stage deep learning pipeline in Python and PyTorch.",
    highlight:
      "MTCNN face localisation feeds a fine-tuned MobileNetV3 classifier, with OpenCV handling the live video stream.",
    techStack: ["Python", "PyTorch", "OpenCV", "NumPy"],
  },
  {
    name: "Twitter Sentiment Analysis",
    tag: "NLP",
    category: "ml",
    status: "archived",
    summary:
      "An NLP model that classifies social media posts about climate change as supportive or opposed to the global warming narrative.",
    highlight:
      "NLTK tokenisation and lemmatisation feed Scikit-Learn supervised models, with NumPy handling vectorisation.",
    techStack: ["Python", "NLTK", "Scikit-Learn", "NumPy"],
  },
  {
    name: "Neural Style Transfer",
    tag: "Creative AI",
    category: "ml",
    status: "archived",
    summary:
      "A deep learning pipeline that applies the artistic style of one image to the content of another using convolutional feature representations.",
    highlight:
      "Style and content are separated through CNN feature maps and recombined by gradient-based optimisation.",
    techStack: ["Python", "PyTorch", "NumPy"],
  },
];

type Skill = { key?: string; label: string };

export const AI_CLUSTERS: { title: string; note: string; skills: Skill[] }[] = [
  {
    title: "Tooling",
    note: "What I build with",
    skills: [
      { label: "Claude Code" },
      { label: "Claude Skills" },
      { label: "MCP (Model Context Protocol)" },
      { label: "AI Agents & Subagents" },
    ],
  },
  {
    title: "Methods",
    note: "How I keep AI output reliable",
    skills: [
      { label: "RPI: Research, Plan, Implement" },
      { label: "Spec-Driven Development" },
      { label: "Context Engineering" },
      { label: "Prompt Engineering" },
      { label: "Graph Engineering" },
      { label: "Reviewing & Hardening AI Code" },
    ],
  },
  {
    title: "Foundations",
    note: "Under the hood",
    skills: [
      { label: "LLM APIs & Tool Calling" },
      { label: "RAG & Embeddings" },
      { label: "Agentic Workflows" },
    ],
  },
];

export const SKILL_GROUPS: {
  title: string;
  subtitle: string;
  color: string;
  span: number;
  skills: Skill[];
}[] = [
  {
    title: "Frontend",
    subtitle: "Interfaces and tooling",
    color: "#4cd7f6",
    span: 7,
    skills: [
      { key: "react", label: "React" },
      { key: "next", label: "Next.js" },
      { key: "sb", label: "Storybook" },
      { key: "tailwind", label: "Tailwind CSS" },
      { label: "FlutterFlow" },
      { key: "webpack", label: "Webpack" },
    ],
  },
  {
    title: "Languages",
    subtitle: "Core programming languages",
    color: "#7ee787",
    span: 5,
    skills: [
      { key: "js", label: "JavaScript (ES6+)" },
      { key: "ts", label: "TypeScript" },
      { key: "go", label: "Go" },
      { key: "py", label: "Python" },
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Services and API design",
    color: "#ff9a52",
    span: 5,
    skills: [
      { key: "node", label: "Node.js" },
      { key: "go", label: "Golang" },
      { label: "Express" },
      { label: "FastAPI" },
      { label: "REST" },
      { key: "gql", label: "GraphQL" },
      { label: "BFF Design" },
      { label: "OpenAPI" },
    ],
  },
  {
    title: "Data & Cloud",
    subtitle: "Storage and delivery",
    color: "#a5a6ff",
    span: 7,
    skills: [
      { key: "pg", label: "PostgreSQL" },
      { key: "mongo", label: "MongoDB" },
      { label: "MySQL" },
      { key: "redis", label: "Redis" },
      { key: "aws", label: "AWS" },
      { key: "docker", label: "Docker" },
    ],
  },
];

export const NAV_ITEMS = [
  { to: "/", label: "About", end: true },
  { to: "/experience", label: "Experience", end: false },
  { to: "/projects", label: "Projects", end: false },
  { to: "/skills", label: "Skills", end: false },
  { to: "/resume", label: "Resume", end: false },
];

export const HERO_STATS = [
  {
    label: "Experience",
    value: YEARS_EXPERIENCE,
    unit: "Yrs",
    note: "Frontend to full stack",
  },
  {
    label: "Portals shipped",
    value: "5",
    unit: "",
    note: "Onboarding platforms",
  },
  {
    label: "Daily users",
    value: "10K+",
    unit: "",
    note: "Across live products",
  },
];

export const PHILOSOPHY = [
  {
    tag: "AI-native workflow",
    title: "Research, Plan, Implement",
    body: "I use Claude Code, Skills, MCPs and agents across research, API specs, backend and frontend, with spec-driven development to keep AI output predictable.",
    foot: "AI speed, engineering discipline",
  },
  {
    tag: "Full-stack ownership",
    title: "End-to-End Features",
    body: "From frontend developer to full-stack feature owner: OpenAPI specs, BFF and backend APIs, and polished React interfaces shipped as one coherent feature.",
    foot: "Specs to production",
  },
  {
    tag: "Quality & security",
    title: "Reliable by Default",
    body: "Tests, quality gates, linting and secure coding with JWT and OAuth2, so speed never costs trust.",
    foot: "Tested, secure, maintainable",
  },
];

export const NOW = [
  {
    label: "Currently",
    title: "Software Engineer II at Cvent",
    note: "Shipping full-stack features with an AI-native workflow.",
  },
  {
    label: "Building",
    title: "Element Stack",
    note: "An interactive frontend interview-prep platform.",
    href: "https://elementstack.vercel.app/",
  },
  {
    label: "Open to",
    title: "Full-stack & AI-native roles",
    note: "Based in Bengaluru.",
  },
];

export const EXPLORE = [
  {
    to: "/experience",
    title: "Experience",
    note: "Four roles across fintech and event tech, from research intern to full-stack owner.",
    preview: ["Cvent", "IDFC FIRST Bank", "Persistent"],
    color: "#4cd7f6",
  },
  {
    to: "/projects",
    title: "Projects",
    note: "What I'm building now, plus earlier full-stack and machine learning work.",
    preview: ["Element Stack", "Code Editor", "Samvad"],
    color: "#ff9a52",
  },
  {
    to: "/skills",
    title: "Skills",
    note: "The AI tooling, languages and frameworks I ship with every day.",
    preview: ["Claude Code", "MCP", "React", "Go"],
    color: "#a5a6ff",
  },
];

export const CODE_SNIPPET = `{
  "developer": "Ashish Upadhyay",
  "role": "Software Engineer II",
  "focus": "AI-native frontend & full-stack",
  "workflow": ["Research", "Plan", "Implement"],
  "tools": ["Claude Code", "Skills", "MCP", "Agents"],
  "principles": [
    "Spec-driven development",
    "Tests and quality gates before merge",
    "Review and harden every AI-generated change"
  ]
}`;

export const EDUCATION = {
  school: "Jabalpur Engineering College",
  degree: "B.Tech, Computer Science & Engineering",
  period: "Jun 2018 - Jul 2022",
  gpa: "GPA 8.17",
};

export const CERTIFICATIONS = [
  "DeepLearning.AI: Deep Learning Specialization",
  "CCD: Front End Foundations",
  "CCD: Secure Developer",
];

export const Experiences: {
  img: string;
  role: string;
  duration: string;
  loc: string;
  company: string;
  color: string;
  summary: string;
  highlights: string[];
  tech: string[];
  desc: string[];
  resume: string[];
}[] = [
  {
    img: "cvent",
    company: "Cvent",
    color: "#009fdf",
    role: "Software Engineer II",
    loc: "Bengaluru",
    duration: "Feb 2026 - Present",
    summary:
      "Grew from frontend developer to full-stack feature owner in eight months, delivering features end to end with an AI-native Research, Plan, Implement workflow.",
    highlights: [
      "Frontend to full-stack in 8 months",
      "AI-native delivery",
      "Shipped ahead of schedule",
    ],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "OpenAPI",
      "Storybook",
      "Claude Code",
    ],
    desc: [
      "Led a dashboard homepage epic through a full AI-assisted cycle: research and planning with Claude, API specs, then the backend APIs and frontend dashboards for trends, team summaries and event stats.",
      "Used Claude Skills and agents to build and ship a lead-management feature end to end, from the backend to the detail page in the UI.",
      "Took on backend ownership alongside frontend work, building paginated and aggregated APIs and resolving schema conflicts in the shared OpenAPI specs.",
      "Built BFF APIs for third-party integrations such as company enrichment, feature flagging and meeting booking, delivered ahead of schedule.",
      "Integrated event, budget and summary APIs into the UI, owned a key modal flow and helped close out a major event-list epic.",
      "Improved code quality with pre-push test checks, ESLint and TypeScript build cleanup, and Storybook and Prettier upgrades, and helped fix production issues and bug-bash findings.",
    ],
    resume: [
      "Led a dashboard homepage epic through a full AI-assisted Research, Plan, Implement cycle: research and planning with Claude, API specs, then the backend APIs and frontend dashboards.",
      "Moved from frontend developer to full-stack feature owner within eight months, building paginated and aggregated backend APIs and maintaining shared OpenAPI specs.",
      "Used Claude Skills and agents to ship a lead-management feature end to end, backend and frontend.",
      "Built BFF APIs for third-party integrations such as company enrichment, feature flagging and meeting booking, delivered ahead of schedule.",
      "Improved code quality with pre-push test checks, lint and TypeScript build cleanup, and Storybook and Prettier upgrades; fixed production issues and led bug-bash fixes.",
    ],
  },
  {
    img: "idfc",
    company: "IDFC FIRST Bank",
    color: "#b3202d",
    role: "Software Developer",
    loc: "Bengaluru",
    duration: "Jul 2022 - Feb 2026",
    summary:
      "Nearly four years building customer onboarding platforms in React, from the first portal to a family of five used by over 10,000 people every day.",
    highlights: [
      "5 onboarding portals",
      "10K+ daily users",
      "React and cross-platform",
    ],
    tech: ["React", "FlutterFlow", "Jest", "ESLint", "JWT"],
    desc: [
      "Developed and maintained five onboarding portals (NRI, Resident, Corporate, Fastag, Staff) serving over 10,000 daily users.",
      "Designed the React-based NRI onboarding system and reduced account creation time with API batching, modular UI components and caching strategies.",
      "Integrated Video KYC, LDAP and secure authentication modules, improving the onboarding success rate.",
      "Built a resident-to-NRI migration app in FlutterFlow and integrated it with a React monorepo for cross-platform deployment.",
      "Improved performance with lazy-loading, Lighthouse tuning and Gzip compression, and reduced bugs with Jest and ESLint in CI.",
      "Secured APIs with JWT authentication and encryption across the onboarding flows.",
    ],
    resume: [
      "Developed and maintained five onboarding portals (NRI, Resident, Corporate, Fastag, Staff) serving over 10,000 daily users.",
      "Designed the React-based NRI onboarding system and reduced account creation time with API batching, modular UI and caching strategies.",
      "Integrated Video KYC, LDAP and secure authentication modules, improving the onboarding success rate.",
      "Built a resident-to-NRI migration app in FlutterFlow, integrated with a React monorepo for cross-platform deployment.",
      "Improved performance with lazy-loading, Lighthouse tuning and Gzip compression, and secured APIs with JWT authentication and encryption.",
    ],
  },
  {
    img: "persi",
    company: "Persistent Systems",
    color: "#ff6900",
    role: "Software Engineering Intern",
    loc: "Pune",
    duration: "Jan 2022 - May 2022",
    summary:
      "First industry role, working in an Agile team on a Node.js enterprise platform.",
    highlights: ["Performance tuning", "Agile delivery"],
    tech: ["Node.js", "CI/CD", "Agile"],
    desc: [
      "Optimised the performance of a Node.js enterprise platform through refined state handling and better component reusability.",
      "Improved CI/CD pipelines and testing reliability within Agile sprints.",
    ],
    resume: [
      "Optimised the performance of a Node.js enterprise platform through refined state handling and better component reusability.",
      "Improved CI/CD pipelines and testing reliability within Agile sprints.",
    ],
  },
  {
    img: "iiitdm",
    company: "IIITDM Jabalpur",
    color: "#22a447",
    tech: ["Python", "NLTK", "NLP"],
    role: "Research Intern (NLP)",
    loc: "Jabalpur",
    duration: "May 2021 - Oct 2021",
    summary:
      "Early research work applying rule-based NLP to real language problems, which led to a published paper.",
    highlights: ["Co-authored a published paper"],
    desc: [
      "Engineered a high-precision grammar correction system using Python and NLTK, achieving over 90% accuracy in detecting and resolving complex linguistic errors.",
      "Developed a specialized verb-correction module attaining 94% precision, specifically optimized for the rigorous requirements of academic text enhancement.",
      "Leveraged rule-based NLP techniques to translate complex algorithmic solutions into peer-reviewed research, resulting in the co-authorship of a published academic paper.",
    ],
    resume: [
      "Built a rule-based grammar correction system in Python and NLTK, including a verb-correction module, and co-authored a published academic paper.",
    ],
  },
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ashishup1999/",
  github: "https://github.com/ashishup1999",
  leetcode: "https://leetcode.com/u/ashishup1999/",
};

const toResumeRole = (e: (typeof Experiences)[number]) => ({
  company: e.company,
  role: e.role,
  period: e.duration,
  location: `${e.loc}, India`,
  bullets: e.resume,
});

export const RESUME = {
  name: "Ashish Upadhyay",
  title: "Software Engineer | AI-Native Frontend & Full-Stack",
  location: "Bengaluru, India",
  summary: `Software Engineer with ${YEARS_EXPERIENCE} years of experience, grown from frontend developer to full-stack feature owner. Leads features end to end with an AI-native workflow of research, planning, API specs, backend and frontend delivery, using Claude Code, Claude Skills, MCPs and agents. Pairs AI-assisted speed with engineering discipline: OpenAPI specs, review of every AI-generated change, and secure coding.`,
  skills: [
    {
      label: "AI-assisted development",
      items:
        "Claude Code, Claude Skills, MCP integrations, AI agents and subagents, graph engineering, RPI (Research, Plan, Implement), spec-driven development, context and prompt engineering, reviewing and hardening AI-generated code",
    },
    { label: "Languages", items: "JavaScript (ES6+), TypeScript, Go, Python" },
    {
      label: "Frontend",
      items: "React, Next.js, Storybook, Tailwind CSS, FlutterFlow, Webpack",
    },
    {
      label: "Backend & APIs",
      items:
        "Node.js, Golang, Express, FastAPI, REST, GraphQL, BFF design, OpenAPI",
    },
    {
      label: "Data & Cloud",
      items: "PostgreSQL, MongoDB, MySQL, Redis, AWS, Docker",
    },
  ],
  experience: Experiences.filter((e) =>
    ["Cvent", "IDFC FIRST Bank"].includes(e.company),
  ).map(toResumeRole),
  internships: Experiences.filter((e) =>
    ["Persistent Systems", "IIITDM Jabalpur"].includes(e.company),
  ).map(toResumeRole),
  projects: PROJECTS.filter((p) => p.resume).map((p) => ({
    name: p.name,
    stack: [
      p.techStack.join(", "),
      p.status === "active" ? "In progress" : "",
      p.url ? p.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "",
    ]
      .filter(Boolean)
      .join(" | "),
    bullets: p.resume ?? [],
  })),
  education: EDUCATION,
  certifications: CERTIFICATIONS,
};
