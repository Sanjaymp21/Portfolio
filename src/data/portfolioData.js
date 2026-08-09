export const personalInfo = {
  name: "SANJAY M",
  role: "B.Tech Information Technology Student",
  subRole: "Aspiring Software Developer",
  college: "Bannari Amman Institute of Technology",
  expectedGraduation: "2029",
  location: "Tamil Nadu, India",
  email: "sanjaymp2107@gmail.com",
  github: "https://github.com/Sanjaymp21",
  linkedin: "https://www.linkedin.com/in/sanjay-m-39b99a385/",
  resumePath: "/assets/Sanjay-M-Resume.pdf",
  statusBadge: "Open to learning and collaboration",
  heroHeading: "Hi, I'm SANJAY M",
  heroHighlight: "An aspiring software developer building meaningful digital solutions.",
  heroDescription: "I am passionate about software development, artificial intelligence, web technologies, and user experience design. I enjoy turning ideas into practical and user-friendly digital products.",
  careerGoal: "My goal is to become a skilled software developer and build useful, reliable, and user-friendly technology solutions."
};

export const aboutData = {
  paragraphs: [
    "I am a B.Tech Information Technology student at Bannari Amman Institute of Technology, graduating in 2029. I am interested in software development, web technologies, artificial intelligence, and user experience design.",
    "I enjoy creating practical solutions for real-world problems. Through my projects, I have explored digital attendance, pet care, e-waste management, and healthcare. My goal is to become a skilled software developer and build technology that creates a positive impact."
  ],
  pillars: [
    {
      id: "student",
      title: "Student",
      subtitle: "B.Tech IT (Graduating 2029)",
      description: "Undergraduate student at Bannari Amman Institute of Technology with a strong academic foundation and passion for computer science fundamentals.",
      icon: "GraduationCap",
      badge: "Academics"
    },
    {
      id: "developer",
      title: "Software Developer Aspirant",
      subtitle: "Problem Solver & Builder",
      description: "Focused on building reliable, clean, and efficient software applications across web technologies and backend systems.",
      icon: "Code2",
      badge: "Engineering"
    },
    {
      id: "ai-tech",
      title: "AI & Tech Enthusiast",
      subtitle: "Innovative Solutions",
      description: "Exploring artificial intelligence, intelligent data workflows, and modern web frameworks to create high-utility tools.",
      icon: "Cpu",
      badge: "Innovation"
    },
    {
      id: "ui-ux",
      title: "UI/UX Designer",
      subtitle: "Human-Centered Design",
      description: "Crafting intuitive, accessible, and aesthetically pleasing interfaces with strong visual hierarchy and smooth user journeys.",
      icon: "Palette",
      badge: "Design"
    }
  ]
};

export const skillsData = [
  {
    category: "Programming",
    description: "Core languages for logic, problem solving, and backend automation",
    skills: [
      { name: "C", level: "Core Logic", icon: "FileCode", tag: "System & Algorithms" },
      { name: "Python", level: "Scripting & AI", icon: "Terminal", tag: "Data & Automation" },
      { name: "JavaScript", level: "ES6+ Logic", icon: "Braces", tag: "Web & Dynamic" }
    ]
  },
  {
    category: "Web Development",
    description: "Modern frontend technologies for building responsive web interfaces",
    skills: [
      { name: "HTML", level: "Semantic Markup", icon: "Layout", tag: "Structure & SEO" },
      { name: "CSS", level: "Modern Layouts", icon: "Paintbrush", tag: "Styling & Responsive" },
      { name: "JavaScript", level: "DOM & Interaction", icon: "Sparkles", tag: "Interactive UI" }
    ]
  },
  {
    category: "Design",
    description: "Visual design tools and user experience methodologies",
    skills: [
      { name: "UI/UX Design", level: "Wireframing & Prototyping", icon: "PenTool", tag: "User Experience" },
      { name: "Canva Design", level: "Visual Assets & Branding", icon: "Layers", tag: "Graphics & Media" }
    ]
  }
];

export const certificationsData = [
  {
    title: "AWS Certification",
    issuer: "Amazon Web Services",
    description: "Cloud fundamentals, cloud computing infrastructure, and core services architecture.",
    tag: "Cloud Computing",
    icon: "Cloud"
  },
  {
    title: "Python Certification",
    issuer: "Professional Python",
    description: "Programming paradigms, data structures, scripting, and problem-solving techniques.",
    tag: "Programming",
    icon: "Terminal"
  },
  {
    title: "NPTEL Certification",
    issuer: "NPTEL / IIT",
    description: "Rigorous academic curriculum and verified coursework in core computing disciplines.",
    tag: "Academic Excellence",
    icon: "Award"
  }
];

export const achievementsData = [
  {
    id: "spl",
    title: "School SPL (Student Pupil Leader)",
    organization: "School Leadership",
    description: "Served as School SPL, demonstrating strong leadership, responsibility, school-wide event coordination, and effective teamwork.",
    highlights: ["Leadership & Responsibility", "Event Coordination", "Teamwork & Mentorship"],
    icon: "ShieldCheck",
    category: "Leadership"
  },
  {
    id: "10th",
    title: "10th Standard Academic Distinction",
    organization: "Board Examination",
    score: "96%",
    description: "Achieved outstanding academic results with a 96% score, reflecting solid dedication to fundamentals and discipline.",
    highlights: ["Top Percentile", "Strong Science & Math foundation"],
    icon: "Medal",
    category: "Academic"
  },
  {
    id: "12th",
    title: "12th Standard Academic Distinction",
    organization: "Higher Secondary Board Examination",
    score: "90%",
    description: "Secured 90% in Higher Secondary education with focus on Mathematics, Physics, and Computer Science streams.",
    highlights: ["Academic Consistency", "High Performance"],
    icon: "Trophy",
    category: "Academic"
  },
  {
    id: "certs",
    title: "Technical Certifications",
    organization: "AWS, Python, NPTEL",
    description: "Earned recognized industry and academic certifications demonstrating continuous skill enhancement.",
    highlights: ["AWS Cloud", "Python Programming", "NPTEL Coursework"],
    icon: "CheckCircle2",
    category: "Certifications"
  }
];

export const educationData = {
  degree: "B.Tech Information Technology",
  institution: "Bannari Amman Institute of Technology",
  graduation: "Expected 2029",
  location: "Tamil Nadu, India",
  highlights: [
    { label: "10th Standard", score: "96%" },
    { label: "12th Standard", score: "90%" }
  ]
};

export const projectsData = [
  {
    id: 1,
    number: "01",
    title: "SST Groomers",
    category: "Pet Care",
    shortDescription: "SST Groomers is a pet grooming trust and booking platform designed to help pet owners find grooming services and book appointments easily.",
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    github: "https://github.com/Sanjaymp21",
    liveDemo: null, // No fake demo link
    status: "Coming Soon",
    visualTheme: "from-amber-500/20 via-cyan-500/10 to-blue-500/20",
    gradientBorder: "border-amber-500/30 group-hover:border-amber-400/60",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    keyPoints: [
      "Intuitive pet care booking system with easy appointment scheduling",
      "Grooming service directory with transparent package breakdowns",
      "Responsive, clean UI crafted with human-centric UX principles"
    ]
  },
  {
    id: 2,
    number: "02",
    title: "PCDP V4",
    category: "Digital Management",
    shortDescription: "PCDP V4 is a secure digital attendance management system designed to simplify attendance tracking and reduce manual record-keeping. It focuses on accuracy, security, and easy digital access.",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sanjaymp21",
    liveDemo: null,
    status: "Coming Soon",
    visualTheme: "from-blue-500/20 via-indigo-500/10 to-cyan-500/20",
    gradientBorder: "border-blue-500/30 group-hover:border-blue-400/60",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    keyPoints: [
      "Eliminates manual paperwork with automated digital tracking",
      "Python logic for fast record verification and log storage",
      "User-friendly web portal for administrators and students"
    ]
  },
  {
    id: 3,
    number: "03",
    title: "Recyclo-AI",
    category: "Sustainability and AI",
    shortDescription: "Recyclo-AI is an AI-powered e-waste management platform created to encourage responsible disposal and recycling of electronic waste.",
    technologies: ["Python", "AI", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sanjaymp21",
    liveDemo: null,
    status: "Coming Soon",
    visualTheme: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    gradientBorder: "border-emerald-500/30 group-hover:border-emerald-400/60",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    keyPoints: [
      "AI-driven classification of electronic waste components",
      "Incentive-driven platform for responsible consumer recycling",
      "Educational modules on environmental e-waste hazards"
    ]
  },
  {
    id: 4,
    number: "04",
    title: "EndoJourney AI",
    category: "Health Technology",
    shortDescription: "EndoJourney AI is an AI-powered health companion designed to support people affected by endometriosis through a calm, accessible, and supportive digital experience.",
    technologies: ["Python", "AI", "HTML", "CSS", "JavaScript", "UI/UX Design"],
    disclaimer: "This project is for educational and supportive purposes only. It does not replace professional medical advice, diagnosis, or treatment.",
    github: "https://github.com/Sanjaymp21",
    liveDemo: null,
    status: "Coming Soon",
    visualTheme: "from-purple-500/20 via-pink-500/10 to-cyan-500/20",
    gradientBorder: "border-purple-500/30 group-hover:border-purple-400/60",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    keyPoints: [
      "Empathetic, soothing interface designed for accessible patient care",
      "AI companion providing supportive health insights & logging",
      "Comprehensive educational resources and support information"
    ]
  }
];
