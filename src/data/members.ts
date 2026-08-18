export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  achievements: string[];
  experience: {
    year: string;
    title: string;
    description: string;
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    github: string;
  }[];
  linkedin: string;
  instagram: string;
  github: string;
  portfolio: string;
  email: string;
};

export const members: TeamMember[] = [
  {
    id: 1,
    name: "Swathi",
    role: "Team Lead / AI-ML Developer",
    image: "/members/member-1.jpg",
    bio: "I am an AI/ML enthusiast focused on building practical technology solutions. I enjoy combining software development, intelligent systems and creative problem solving.",
    skills: ["Python", "Machine Learning", "PyTorch", "TensorFlow", "SQL", "System Architecture", "Leadership"],
    achievements: ["Hackathon Finalist 2026", "AI Certification", "Programming Competition Winner"],
    experience: [
      { year: "2026", title: "Hackathon Team Lead", description: "Led a team of 6 to build an award-winning portfolio project." },
      { year: "2025", title: "AI Project Developer", description: "Developed machine learning models for predictive analytics." }
    ],
    projects: [
      { title: "Neural Sync", description: "A predictive engine for user behavior.", technologies: ["Python", "PyTorch", "FastAPI"], link: "#", github: "#" }
    ],
    linkedin: "#", instagram: "#", github: "#", portfolio: "#", email: "mailto:hello@example.com"
  },
  {
    id: 2,
    name: "Vignesh S",
    role: "AI/ML & Game Developer",
    image: "/members/member-2.jpg",
    bio: "Passionate AI learner and aspiring game developer focused on creating interactive games, intelligent systems, and creative software experiences.",
    skills: ["Python", "JavaScript", "Machine Learning", "Game Development", "HTML5/CSS3", "React"],
    achievements: ["AIML Student", "Passionate AI Learner", "Aspiring Game Developer"],
    experience: [
      { year: "2026", title: "AI/ML Project Developer", description: "Developed intelligent algorithms and machine learning models." },
      { year: "2025", title: "Game Developer", description: "Created interactive web games including Dino Run and Mystery Word." }
    ],
    projects: [
      { title: "Tic Tac Toe Game", description: "A classic interactive Tic Tac Toe game with smooth gameplay and AI logic.", technologies: ["JavaScript", "HTML5", "CSS3"], link: "https://tic-tac-toe-svk.onrender.com/", github: "#" },
      { title: "Mystery Word Game", description: "An engaging word guessing game with clue systems and dynamic difficulty.", technologies: ["JavaScript", "HTML5", "CSS3"], link: "https://svk-mystery-word-game.onrender.com/", github: "#" },
      { title: "Dino Run Game", description: "A fun browser-based endless runner game featuring collision detection and score tracking.", technologies: ["JavaScript", "Canvas API", "CSS3"], link: "https://vignesh-svk24.github.io/Dino-Game-/", github: "#" }
    ],
    linkedin: "#", instagram: "#", github: "#", portfolio: "#", email: "mailto:hello@example.com"
  },
  {
    id: 3,
    name: "Yashaswini",
    role: "UI/UX Designer",
    image: "/members/member-3.jpg",
    bio: "Creating beautiful, intentional, and highly functional digital experiences. I focus on editorial layouts and typographic excellence.",
    skills: ["UI/UX", "Figma", "Interaction Design", "Prototyping", "Typography", "CSS"],
    achievements: ["Best UI Award", "Design Excellence 2025"],
    experience: [
      { year: "2026", title: "Lead Designer", description: "Designed the Celestial team portfolio identity." },
      { year: "2025", title: "Product Designer", description: "Designed applications for various startups." }
    ],
    projects: [
      { title: "Aether UI", description: "A minimal component library.", technologies: ["Figma", "React", "Tailwind"], link: "#", github: "#" }
    ],
    linkedin: "#", instagram: "#", github: "#", portfolio: "#", email: "mailto:hello@example.com"
  },
  {
    id: 4,
    name: "Mohammad Fahim Sinan",
    role: "Backend Developer",
    image: "/members/member-4.jpg",
    bio: "Ensuring systems run smoothly and efficiently. Passionate about database design, microservices, and system performance.",
    skills: ["Java", "Spring Boot", "Go", "PostgreSQL", "Kubernetes", "Redis"],
    achievements: ["Scalability Challenge Winner", "Cloud Architecture Cert"],
    experience: [
      { year: "2026", title: "Backend Systems", description: "Implemented real-time data pipelines." },
      { year: "2025", title: "Database Admin", description: "Managed large scale distributed databases." }
    ],
    projects: [
      { title: "DataFlow", description: "High throughput messaging queue.", technologies: ["Go", "Redis", "Kafka"], link: "#", github: "#" }
    ],
    linkedin: "#", instagram: "#", github: "#", portfolio: "#", email: "mailto:hello@example.com"
  },
  {
    id: 5,
    name: "Thanush Raja Shankar",
    role: "Data / AI Engineer",
    image: "/members/member-5.jpg",
    bio: "Transforming raw data into actionable insights and robust models. I bridge the gap between data science and production engineering.",
    skills: ["Python", "Spark", "Data Pipelines", "Machine Learning", "SQL", "Cloud Platform"],
    achievements: ["Data Science Hackathon 1st", "Published Paper 2024"],
    experience: [
      { year: "2026", title: "Data Engineer", description: "Built data ingestion pipelines for the ML models." },
      { year: "2024", title: "Data Analyst", description: "Analyzed user metrics for growth." }
    ],
    projects: [
      { title: "Insight Engine", description: "Automated data visualization tool.", technologies: ["Python", "Pandas", "React"], link: "#", github: "#" }
    ],
    linkedin: "#", instagram: "#", github: "#", portfolio: "#", email: "mailto:hello@example.com"
  },
  {
    id: 6,
    name: "Member Six",
    role: "Creative / Product Designer",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    bio: "Focusing on the intersection of art, technology, and user experience. I bring a cinematic approach to digital product design.",
    skills: ["Creative Direction", "Figma", "After Effects", "Webflow", "Branding", "3D Modeling"],
    achievements: ["Creative Excellence", "Webby Nominee"],
    experience: [
      { year: "2026", title: "Creative Director", description: "Directed the visual motion of the portfolio." },
      { year: "2023", title: "Brand Designer", description: "Crafted brand identities for tech firms." }
    ],
    projects: [
      { title: "Horizon", description: "Interactive 3D web experience.", technologies: ["Three.js", "Blender", "GSAP"], link: "#", github: "#" }
    ],
    linkedin: "#", instagram: "#", github: "#", portfolio: "#", email: "mailto:hello@example.com"
  }
];
