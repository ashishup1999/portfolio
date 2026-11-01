export const YEARS_EXPERIENCE = "4+";

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
  /** Month of the latest commit on GitHub, for projects without a live release. */
  updated?: string;
  summary: string;
  highlight: string;
  features?: string[];
  techStack: string[];
  url?: string;
  repos?: { label: string; href: string }[];
  resume?: string[];
}[] = [
  {
    name: "Element Stack",
    tag: "Frontend interview prep",
    category: "fullstack",
    status: "active",
    summary:
      "A self-hosted desktop app for practising front-end interview questions. A guided setup installs and starts everything through Docker, then opens a browser editor that builds and previews your code.",
    highlight:
      "Free to run and private by design: nothing is uploaded, and your code, projects and progress stay on your computer.",
    features: [
      "Desktop installers for macOS (Apple silicon and Intel) and Windows, with a guided setup that checks for Docker and starts the app",
      "Live previews that rebuild on save, with errors shown by file and line",
      "Three containers: Postgres for storage and sign-in, an app service that builds and checks code, and a sandbox that serves previews",
      "No account, cloud or tracking: learner code runs in locked-down containers, previews run in read-only ones, and you can export or delete your data from Settings",
    ],
    techStack: ["Docker", "PostgreSQL", "Desktop app"],
    url: "https://elementstack.vercel.app/",
    resume: [
      "Built a self-hosted desktop app (macOS and Windows) for front-end interview practice, with a guided setup that checks for Docker and starts the app.",
      "Built the browser editor with live previews on three containers (Postgres, app, sandbox); nothing is uploaded, and learner code runs in locked-down containers.",
    ],
  },
  {
    name: "Codekar",
    tag: "Full stack",
    category: "fullstack",
    status: "archived",
    updated: "Dec 2025",
    summary:
      "A browser-based code editor for JavaScript, Python, Go, C++ and Java. Users keep their work as playgrounds, whiteboards and web projects, look up other developers and send connection requests.",
    highlight:
      "A Go API (Gin, MongoDB) behind a Next.js client, running code through a per-language compile service with a 20 second timeout.",
    features: [
      "Monaco editor that compiles and runs JavaScript, Python, Go, C++ and Java on the server",
      "Playgrounds and whiteboards: saved, named scratchpads with a separate code buffer per language, plus custom input and output",
      "Web projects made of HTML, CSS and JavaScript, with a live preview",
      "Explore page to search developers, projects, playgrounds and whiteboards, with profiles, profile photos and connection requests",
    ],
    techStack: ["Next.js", "TypeScript", "Monaco Editor", "Golang", "Gin", "MongoDB"],
    url: "https://codekar-one.vercel.app",
    repos: [
      { label: "Client", href: "https://github.com/ashishup1999/codekar" },
      { label: "Server", href: "https://github.com/ashishup1999/codekar-server" },
    ],
    resume: [
      "Built a browser code editor that compiles and runs JS, Python, Go, C++ and Java through a Go API.",
      "Added playgrounds, whiteboards, HTML/CSS/JS web projects with live preview, and a developer explore page with connection requests.",
    ],
  },
  {
    name: "Samvad",
    tag: "Full stack",
    category: "fullstack",
    status: "archived",
    updated: "Jul 2025",
    summary:
      "A real-time chat web app. People sign up with an avatar, search for each other to start a chat, and message live over Socket.IO.",
    highlight:
      "Every chat is a Socket.IO room, and each message records when it was sent, delivered and seen.",
    features: [
      "Live messaging with sent, delivered and seen timestamps stored in MongoDB",
      "Search for people to start a chat, an avatar picker at sign-up, and deleting selected messages",
      "Password recovery with an emailed one-time code; passwords are stored AES-encrypted",
      "React client and Express server, each with its own Dockerfile",
    ],
    techStack: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "Docker"],
    repos: [
      { label: "Client", href: "https://github.com/ashishup1999/samvad-client" },
      { label: "Server", href: "https://github.com/ashishup1999/samvad-server" },
    ],
  },
  {
    name: "Face Mask Detector",
    tag: "Computer vision",
    category: "ml",
    status: "archived",
    updated: "Jun 2021",
    summary:
      "A webcam app that finds faces and labels each one Masked or Not masked, using a two-stage PyTorch pipeline.",
    highlight:
      "MTCNN detects the faces. A MobileNetV3-Large classifier with a frozen ImageNet backbone and a new one-neuron head, trained for 10 epochs, labels each crop.",
    techStack: ["Python", "PyTorch", "MTCNN", "OpenCV"],
    repos: [
      {
        label: "Source",
        href: "https://github.com/ashishup1999/Face-Mask-Detector-for-COVID-pandemic",
      },
    ],
  },
  {
    name: "Twitter Sentiment Analysis",
    tag: "NLP",
    category: "ml",
    status: "archived",
    updated: "Jun 2021",
    summary:
      "A Naive Bayes classifier trained on a global warming tweet dataset to predict whether a tweet says global warming exists (yes or no).",
    highlight:
      "Tweets are cleaned, stripped of NLTK stopwords and Porter-stemmed, turned into a bag of up to 5,000 words, reduced to 5 components with PCA, then classified with Gaussian Naive Bayes.",
    techStack: ["Python", "NLTK", "Scikit-Learn", "Pandas"],
    repos: [
      {
        label: "Source",
        href: "https://github.com/ashishup1999/NLP-on-twitter-sentiments",
      },
    ],
  },
  {
    name: "Neural Style Transfer",
    tag: "Creative AI",
    category: "ml",
    status: "archived",
    updated: "Jun 2021",
    summary:
      "Repaints one image in the style of another by optimising the output image directly against a pretrained VGG19 network.",
    highlight:
      "A content loss on a deep VGG19 layer plus a Gram-matrix style loss across five layers, minimised with Adam over 2,000 steps per run.",
    techStack: ["Python", "PyTorch", "VGG19", "OpenCV"],
    repos: [
      {
        label: "Source",
        href: "https://github.com/ashishup1999/Neural-Style-Transfer-pytorch-",
      },
    ],
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
    note: "Shipping full-stack features end to end.",
  },
  {
    label: "Building",
    title: "Element Stack",
    note: "A self-hosted desktop app for front-end interview practice.",
    href: "https://elementstack.vercel.app/",
  },
  {
    label: "Based in",
    title: "Bengaluru, India",
    note: "Working across frontend, backend and AI tooling.",
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
  gpa: "GPA 8.17 / 10",
};

export const CERTIFICATIONS = [
  "DeepLearning.AI: Deep Learning Specialization",
  "Cvent Certified Developer: Front End Foundations",
  "Cvent Certified Developer: Secure Developer",
];

export const Experiences: {
  img: string;
  role: string;
  duration: string;
  loc: string;
  company: string;
  color: string;
  wideLogo?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
  desc: string[];
  resume: string[];
}[] = [
  {
    img: "cvent",
    company: "Cvent",
    color: "#01ef6c",
    wideLogo: true,
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
      "Led the dashboard homepage epic from start to finish: researched and planned it with Claude, wrote the API specs, then built the backend endpoints and the frontend dashboards.",
      "Moved from frontend work to owning full-stack features within eight months. Built paginated and aggregated APIs and fixed schema clashes in the shared OpenAPI specs.",
      "Shipped a lead-management feature end to end, using Claude Skills and agents for both the backend and the detail page.",
      "Wrote BFF APIs for third-party integrations (company enrichment, feature flags, meeting booking) and delivered them ahead of schedule.",
      "Added test checks to the pre-push hook, cleaned up lint and TypeScript build errors, upgraded Storybook and Prettier, and fixed production issues and bug-bash items.",
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
      "Built and maintained five onboarding portals (NRI, Resident, Corporate, Fastag and Staff) used by more than 10,000 people a day.",
      "Designed the React-based NRI onboarding flow and cut account creation time with API batching, reusable components and caching.",
      "Integrated Video KYC, LDAP and secure sign-in modules, which improved the onboarding success rate.",
      "Built a resident-to-NRI migration app in FlutterFlow and wired it into the React monorepo.",
      "Improved page speed with lazy loading, Lighthouse fixes and Gzip, and secured the APIs with JWT authentication and encryption.",
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
      "Sped up a Node.js enterprise platform by reworking state handling and reusing components.",
      "Improved CI/CD pipelines and test reliability inside Agile sprints.",
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
      "Built a rule-based grammar correction system in Python with NLTK (over 90% accuracy on error detection and correction), including a verb-correction module at 94% precision, and co-authored a published paper.",
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
  title: "Software Engineer | Frontend & Full-Stack",
  location: "Bengaluru, India",
  summary: `Software engineer with ${YEARS_EXPERIENCE} years of experience. Started on the frontend and now owns features across the stack, from the API spec to the UI. At Cvent, plans and builds with Claude Code, Claude Skills, MCP servers and agents, and reviews every generated change before it merges.`,
  skills: [
    {
      label: "AI-assisted development",
      items:
        "Claude Code, Claude Skills, MCP integrations, AI agents and subagents, RAG, RPI (Research, Plan, Implement), spec-driven development, context and prompt engineering, reviewing and hardening AI-generated code",
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
