export const ABOUT_DETAILS = {
  text1: "Hi, I am Ashish Upadhyay, a ",
  text2: "SOFTWARE DEVELOPER",
  text3:
    "with strong full-stack capabilities, experienced in building scalable, production-grade applications end-to-end. I specialize in crafting high-performance React interfaces while working seamlessly across APIs, backend services, and cloud infrastructure to ensure reliability, security, and smooth user experiences. My work involves translating complex system workflows into intuitive frontend solutions while contributing to the underlying architecture — enabling platforms that are not only visually polished, but also robust, efficient, and built to perform at scale.",
};

// 1. Update the type to be a simple string (the URL)
export type SvgUrl = string;

// 2. Import as default (returns string paths)
const skills = import.meta.glob("./assets/skills/*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>; // Cast to string record

export const SKILLS_LIST = Object.entries(skills).map(([path, url]) => ({
  name: (path.split("/").pop() || "").replace(".svg", ""),
  url: url, // This is now a string URL
}));

export const PROJECTS: {
  name: string;
  desc: string;
  img?: string;
  techStack: string[];
}[] = [
  {
    name: "Codepulse",
    desc: `Developed an authentication-based platform enabling users to create mini projects using HTML, CSS, and JavaScript. Also built a code-editor playgrounds supporting 5 languages that are Java, Python, Go, C++, and Js.

Introduced a unique whiteboard-like code-editor mode devoid of common editor features such as auto-suggestion, auto-completion, and auto-indentation to help users grasp a deeper understanding of language’s features.

Facilitated user exploration of other user’s playgrounds with the option to connect and collaborate.

Used a Go based server as Go can handle as many as 1000 concurrent requests per second, making the app faster.`,
    img: "codepulse",
    techStack: ["next", "go", "mongo", "docker"],
  },
  {
    name: "Samvad",
    desc: `Led the development of Samvad, a responsive web application tailored for real-time 1-on-1 chatting with friends. Implemented cutting-edge web socket technology to enable seamless real-time communication, resulting in a 30% increase in chat responsiveness.

Engineered an authentication system with a password retrieval mechanism based on OTP, enhancing security and reducing login issues by 25%.`,
    img: "samvad",
    techStack: ["react", "node", "mongo", "docker"],
  },
  {
    name: "Face Mask Detector",
    desc: `Developed a real-time computer vision system to monitor mask compliance using a dual-stage deep learning pipeline implemented in Python and PyTorch. The system leverages the facenet-pytorch library (MTCNN) for high-precision facial localization and ROI extraction, followed by a fine-tuned MobileNetV3 classifier to differentiate between masked and unmasked faces. By utilizing OpenCV for live video stream processing and NumPy for optimized multi-dimensional array operations, the architecture ensures low-latency performance and high inference speeds suitable for real-world deployment on edge devices.`,
    img: "mask",
    techStack: ["py"],
  },
  {
    name: "Twitter Sentiment Analysis",
    desc: `Developed a natural language processing (NLP) model to perform sentiment classification on social media discourse regarding climate change. Utilizing a dataset of Twitter communications, the system was engineered to categorize text into supportive or oppositional stances toward global warming. The technical implementation involved comprehensive data preprocessing—including tokenization and lemmatization via NLTK—followed by feature extraction and the application of supervised learning algorithms using Scikit-Learn. By leveraging NumPy for vectorization and data manipulation, the project successfully transformed unstructured social media data into actionable insights regarding public environmental sentiment.`,
    img: "sentiment",
    techStack: ["py"],
  },
  {
    name: "Neural Style Transfer",
    desc: `Designed and implemented a real-time computer vision pipeline for automated mask compliance monitoring using Python and PyTorch. The system architecture utilizes facenet-pytorch for high-performance facial detection and localization from live camera feeds, followed by a fine-tuned MobileNetV3 neural network to classify individuals as masked or unmasked. By leveraging OpenCV for real-time video stream processing and NumPy for efficient multi-dimensional array operations, the system achieves a high-frame-rate inference suitable for edge deployment in high-traffic environments. This end-to-end solution effectively automates safety monitoring, ensuring robust performance under various lighting conditions and angles.`,
    img: "nst",
    techStack: ["py"],
  },
];

export const Experiences: {
  img: string;
  role: string;
  duration: string;
  loc: string;
  desc: string[];
}[] = [
  {
    img: "cvent",
    role: "Software Engineer II",
    loc: "Bengaluru",
    duration: "Feb 2026 - Present",
    desc: [
      "Architected and scaled web applications using Next.js and GraphQL to digitize and streamline the lead retrieval and qualification process for large-scale trade shows and conferences.",
      "Engineered robust frontend features for complex data capture—including OCR-based business card processing, badge scanning, and custom qualification forms—ensuring high performance and low latency.",
      "Accelerated feature delivery and maintained strict code modularity by developing within an NX-powered monorepo, driving reusability across Cvent’s evolving suite of trade show solutions.",
      'Integrated frontend systems seamlessly with major CRM and marketing automation platforms, enabling the real-time routing of "hot leads" to sales teams in minutes rather than weeks.',
      "Optimized server-side rendering (SSR) for back-office analytics and crafted intuitive user interfaces for lead segmentation, directly empowering clients to maximize their event ROI through data-driven insights.",
    ],
  },
  {
    img: "idfc",
    role: "Developer",
    loc: "Bengaluru",
    duration: "Jul 2022 - Feb 2026",
    desc: [
      "Spearheaded the development and maintenance of five high-traffic onboarding portals (NRI, Resident, Corporate, Fastag, and Staff), ensuring 99.99% uptime for 10,000+ daily users via Akamai CDN implementation.",
      "Architected a robust React-based NRI system, accelerating account creation workflows through custom API batching logic, modular UI components, and advanced caching strategies.",
      "Enhanced onboarding success rates by integrating mission-critical modules, including Video KYC, LDAP, and secure authentication protocols.",
      "Engineered a cross-platform Resident-to-NRI migration application using FlutterFlow, seamlessly integrating it into a unified React monorepo for streamlined deployment.",
      "Optimized platform performance and core web vitals through Lighthouse tuning, lazy-loading, Gzip compression, and Jest testing suites within automated CI/CD pipelines.",
      "Fortified application security by implementing JWT authentication, end-to-end encryption, and Nginx-level rate limiting to mitigate DDoS risks and bot activity.",
    ],
  },
  {
    img: "persi",
    role: "Software Developer Intern",
    loc: "Pune",
    duration: "Jan 2022 - May 2022",
    desc: [
      "Optimized a Node.js-based enterprise platform, achieving a 15% performance boost through the re-engineering of state management and refinement of component architecture.",
      "Eliminated rendering bottlenecks and streamlined data flow within an Agile delivery framework, significantly reducing system latency.",
      "Enhanced platform responsiveness and scalability to support complex enterprise workloads with improved efficiency and stability.",
    ],
  },
  {
    img: "iiitdm",
    role: "Research Intern (NLP)",
    loc: "Jabalpur",
    duration: "May 2021 - Oct 2021",
    desc: [
      "Engineered a high-precision grammar correction system using Python and NLTK, achieving over 90% accuracy in detecting and resolving complex linguistic errors.",
      "Developed a specialized verb-correction module attaining 94% precision, specifically optimized for the rigorous requirements of academic text enhancement.",
      "Leveraged rule-based NLP techniques to translate complex algorithmic solutions into peer-reviewed research, resulting in the co-authorship of a published academic paper.",
    ],
  },
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ashishup1999/",
  github: "https://github.com/ashishup1999",
  leetcode: "https://leetcode.com/u/ashishup1999/",
};

export const RESUME_LINK =
  "https://drive.google.com/file/d/1Me3q75eWUYd4T1QxPGv81Trxp0LcgayF/view?usp=drive_link";
