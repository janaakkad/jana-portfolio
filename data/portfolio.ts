// =====================================================================
//  PERSONAL KNOWLEDGE BASE
//  Single source of truth that powers every section of the portfolio.
// =====================================================================

export const profile = {
  name: "Jana Yasser Akkad",
  shortName: "Jana Akkad",
  initials: "JA",
  brand: "Lead. Compete. Build.",
  status: "Senior Software Engineering Student",
  location: "Jeddah, Saudi Arabia",
  email: "janaakkad5@gmail.com",
  phone: "+966 56 842 4138",
  github: "https://github.com/janaakkad",
  githubUser: "janaakkad",
  linkedin: "https://www.linkedin.com/in/jana-akkad-574795249/",
  roles: [
    "Software Engineer",
    "President, Tuwaiq Student Club",
    "Chess Competitor",
    "Brazilian Jiu-Jitsu Blue Belt",
    "Builder",
  ],
  summary:
    "Software Engineering student combining solid technical foundations with high-level discipline and leadership built through competitive chess and Jiu-Jitsu. I lead organizations, build products, and perform under pressure.",
  headlines: [
    "Lead. Compete. Build.",
    "Thinking several moves ahead.",
    "Discipline creates freedom.",
    "Built through consistency.",
    "Strategy in mind. Execution in action.",
  ],
};

export const pillars = [
  {
    key: "chess",
    title: "Chess",
    maps: "Strategy",
    glyph: "♞", // knight
    accent: "#4a82c4", // azure
    blurb: "Reading the board several moves ahead before the first one is made.",
  },
  {
    key: "bjj",
    title: "Jiu-Jitsu",
    maps: "Resilience",
    glyph: "🥋",
    accent: "#c44a34", // terracotta
    blurb: "Comfort built inside discomfort. The long game, one round at a time.",
  },
  {
    key: "engineering",
    title: "Engineering",
    maps: "Building Systems",
    glyph: "⌬",
    accent: "#5ba05a", // fern
    blurb: "Turning problems into systems that hold up under real load.",
  },
  {
    key: "leadership",
    title: "Leadership",
    maps: "Creating Impact",
    glyph: "✦",
    accent: "#d9b35c", // gold
    blurb: "Communities are not joined. They are built, person by person.",
  },
] as const;

export const journey = [
  { phase: "01", title: "Learning Discipline", note: "Where structure became second nature." },
  { phase: "02", title: "Competitive Chess", note: "Strategy, patience, decisions under pressure." },
  { phase: "03", title: "Brazilian Jiu-Jitsu", note: "Resilience through consistent, long-term training." },
  { phase: "04", title: "Software Engineering", note: "Foundations, projects, and shipping real systems." },
  { phase: "05", title: "Leadership & Events", note: "Coordinating teams and large-scale operations." },
  { phase: "06", title: "Hackathon Success", note: "1st place among 221 competing teams." },
  { phase: "07", title: "President, Tuwaiq Club", note: "Leading a student organization and its initiatives." },
  { phase: "08", title: "Building Real Products", note: "Full-stack platforms and IoT systems." },
];

export const chess = {
  title: "Thinking Several Moves Ahead",
  lessons: [
    { piece: "♛", name: "Queen", lesson: "Strategic Thinking" },
    { piece: "♞", name: "Knight", lesson: "Pattern Recognition" },
    { piece: "♝", name: "Bishop", lesson: "Long-Term Planning" },
    { piece: "♜", name: "Rook", lesson: "Risk Assessment" },
    { piece: "♟", name: "Pawn", lesson: "Patience" },
    { piece: "♚", name: "King", lesson: "Decisions Under Pressure" },
  ],
  roles: ["Competitor", "Organizer", "Judge"],
  highlight: "Inter-University Chess",
  achievement: "Top 3 finishes",
};

export const bjj = {
  title: "The Long Game",
  current: "Blue Belt",
  belts: [
    { name: "White", color: "#ECE6D8", bar: "#1a1410", reached: true, year: "2024" },
    { name: "Blue", color: "#2F6CC0", bar: "#0e1a30", reached: true, year: "2025" },
    { name: "Purple", color: "#7A4FB5", bar: "#1a1226", reached: false, year: "Next" },
    { name: "Brown", color: "#8A5A30", bar: "#1c130b", reached: false, year: "Soon" },
    { name: "Black", color: "#1C1A19", bar: "#C0392B", reached: false, year: "Goal" },
  ],
  values: [
    "Consistency",
    "Discipline",
    "Resilience",
    "Growth through discomfort",
    "Long-term progress",
  ],
};

export const techStack = [
  "Java",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML",
  "CSS",
  "IoT / ESP32",
  "Figma",
  "Git",
  "Agile",
  "Scrum",
];

export type Mission = {
  id: string;
  codename: string;
  title: string;
  status: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  repo?: string;
  featured?: boolean;
};

export const missions: Mission[] = [
  {
    id: "hajj",
    codename: "MISSION 01",
    title: "Hajj Logistics Hackathon",
    status: "1st Place",
    problem:
      "Food delivery during Hajj is overwhelmed by scale, causing delays and significant waste.",
    solution:
      "A Figma-based conceptual platform optimizing food delivery routes and reducing waste during Hajj, presented to a panel of judges.",
    tech: ["Figma", "Research", "UX", "Systems Design"],
    impact:
      "Selected among the top 20 teams out of 221 applicants. Evaluated and awarded by judges from the Ministry of Hajj & Umrah.",
    featured: true,
  },
  {
    id: "sparkspace",
    codename: "MISSION 02",
    title: "SparkSpace",
    status: "Full-Stack Platform",
    problem:
      "Workshops and events lacked a single place to manage creation, booking, and capacity.",
    solution:
      "A full-stack web platform with separate user and organizer roles, event creation, a booking system, and capacity management, built following Agile practices.",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS"],
    impact: "End-to-end booking flow with role-based access and live capacity control.",
    repo: "SparkSpace",
    featured: true,
  },
  {
    id: "mindglow",
    codename: "MISSION 03",
    title: "Fast Reflex IoT Game",
    status: "Embedded Systems",
    problem:
      "Bridge physical hardware and cloud software into one responsive real-time game.",
    solution:
      "An IoT-based reaction game using buttons, LEDs, and cloud connectivity, focused on game logic, user interaction, and hardware-software integration.",
    tech: ["ESP32", "IoT", "Embedded C", "Cloud"],
    impact: "A working arcade-style game demonstrating real-time embedded control.",
    repo: "MindGlow-IoT",
    featured: true,
  },
];

export const leadership = {
  title: "Building Communities",
  role: "President, Tuwaiq Student Club",
  philosophy:
    "I'd rather help build a community than just be part of one.",
  pillars: [
    { label: "Lead", note: "Set direction and own outcomes." },
    { label: "Organize", note: "Turn ideas into run events." },
    { label: "Grow", note: "Build teams that outlast the moment." },
  ],
  also: [
    {
      org: "Google Developer Groups on Campus",
      role: "PR Team",
      where: "University of Jeddah",
      note: "Driving outreach, turnout, and storytelling for student developer events.",
    },
  ],
};

export type Experience = {
  org: string;
  role: string;
  where: string;
  date: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    org: "WellSpring",
    role: "Event Coordinator",
    where: "Al-Andalus International School",
    date: "Apr 2025",
    points: [
      "Led half of the event zones with Munjiz and Wellspring Egypt.",
      "Organized Eid activities for 400+ students.",
      "Supervised a 15-member team.",
    ],
  },
  {
    org: "Vuel Sportswear",
    role: "Sales & Booth Supervisor",
    where: "Superdome FitExpo",
    date: "Jan 2025",
    points: [
      "Delegated tasks and guided employees to on-time completion.",
      "Supervised booth operations at a major fitness expo.",
      "Managed pricing, discounts, and cash handling.",
    ],
  },
  {
    org: "Pure Group",
    role: "Event Organizer",
    where: "Al Qasr Hall",
    date: "Feb 2024",
    points: [
      "Coordinated Pure Group's 10th Anniversary event.",
      "Managed setup, registration, and guest experience.",
    ],
  },
  {
    org: "Exseedoo",
    role: "Event Organizer",
    where: "Superdome FitExpo",
    date: "Jan 2024",
    points: [
      "Supported crowd control and safe zones.",
      "Assisted with VIP entry and event flow.",
    ],
  },
  {
    org: "ATHAR Elal Program",
    role: "Call Center & Operations Coordinator",
    where: "Hajj & Umrah Program",
    date: "Jun - Jul 2023",
    points: [
      "Processed guest data using the 1Half system.",
      "Issued Hajj IDs and coordinated transportation.",
      "Provided English translation and guest support.",
    ],
  },
  {
    org: "Saudi Ground Services",
    role: "Customer Service Representative",
    where: "Saudi Cruise",
    date: "Nov 2022 - May 2023",
    points: [
      "Assisted international VIP cruise passengers.",
      "Handled inquiries, complaints, and special needs.",
      "Supported official ministerial visits.",
    ],
  },
  {
    org: "BOOST",
    role: "Game Host",
    where: "Gaming Operations",
    date: "Jul 2021 - Sep 2022",
    points: [
      "Managed gaming areas and ensured safety compliance.",
      "Operated cash register and coordinated queues.",
    ],
  },
];

export type Achievement = {
  title: string;
  detail: string;
  tag: string;
};

export const achievements: Achievement[] = [
  {
    title: "1st Place, Hajj Logistics Hackathon",
    detail: "Top 20 of 221 teams. Awarded by the Ministry of Hajj & Umrah.",
    tag: "Hackathon",
  },
  {
    title: "Inter-University Chess, Top 3",
    detail: "Competitor, organizer, and judge across university tournaments.",
    tag: "Chess",
  },
  {
    title: "President, Tuwaiq Student Club",
    detail: "Leading a student organization, its teams and initiatives.",
    tag: "Leadership",
  },
  {
    title: "Brazilian Jiu-Jitsu Blue Belt",
    detail: "Earned through consistency, discipline, and long-term training.",
    tag: "Sport",
  },
  {
    title: "Sports Talents Forum 2025",
    detail: "Certificate of Appreciation, University of Jeddah Sports Talent Dept.",
    tag: "Recognition",
  },
  {
    title: "Event Leadership, 400+ Students",
    detail: "Led Eid activities and a 15-member team at WellSpring.",
    tag: "Events",
  },
];

export const certifications = [
  { name: "Agile Project Management", issuer: "Edraak" },
  { name: "HCIA-IoT V3.0", issuer: "Huawei" },
  { name: "Scrum Master Fundamentals", issuer: "Coursera" },
  { name: "Certificate of Appreciation, Sports Talents Forum 2025", issuer: "University of Jeddah" },
];

export const skillClusters = [
  {
    name: "Engineering",
    skills: ["Java", "JavaScript", "Node.js", "Express", "MongoDB", "IoT", "Git"],
  },
  {
    name: "Strategy",
    skills: ["Strategic Thinking", "Pattern Recognition", "Risk Assessment", "Decisions Under Pressure"],
  },
  {
    name: "Leadership",
    skills: ["Team Management", "Public Relations", "Mentoring", "Event Operations"],
  },
  {
    name: "Problem Solving",
    skills: ["Structured Problem Solving", "Systems Thinking", "Requirements Analysis", "Concept to Prototype"],
  },
  {
    name: "Project Management",
    skills: ["Agile", "Scrum", "Sprint Execution", "Use-Case Modeling"],
  },
  {
    name: "Operations",
    skills: ["Logistics", "Crowd Management", "Cash Handling", "Scheduling"],
  },
];

export const education = [
  {
    school: "University of Jeddah",
    degree: "Bachelor's Degree in Software Engineering",
    date: "2022 - Present",
  },
  {
    school: "Dar Al Rowad Schools",
    degree: "High School Diploma, high GPA",
    date: "2019 - 2022",
  },
];

export const futureVision = [
  { stage: "Now", title: "Senior Software Engineering Student", active: true },
  { stage: "Next", title: "Software Engineer", active: false },
  { stage: "Then", title: "Technical Leader", active: false },
  { stage: "Goal", title: "Founder / Builder", active: false },
];

// LinkedIn-style highlights / moments. Drop a real photo at the `image`
// path (under /public) and it replaces the gradient placeholder.
export type Moment = {
  id: string;
  title: string;
  blurb: string;
  tag: string;
  glyph: string;
  image?: string;
  focus?: string; // CSS object-position, e.g. "center 25%"
  wide?: boolean;
  tall?: boolean; // taller image area for portrait-ish shots
  full?: boolean; // full-width feature banner
};

export const moments: Moment[] = [
  {
    id: "tuwaiq",
    title: "President, Tuwaiq Student Club",
    blurb:
      "My latest chapter: leading the club, its teams, and its initiatives, and building a community that outlasts any single event.",
    tag: "Leadership",
    glyph: "✦",
    image: "/moments/tuwaiq.jpg",
    wide: true,
  },
  {
    id: "gradstory",
    title: "Featured in “Graduate Story”",
    blurb:
      "One of those moments that feel bigger than you while you live them: selected for the University of Jeddah graduation video, featuring my Hajj Logistics Hackathon journey, screened at the official ceremony before HH Prince Saud bin Abdullah bin Jalawi.",
    tag: "Featured",
    glyph: "▶",
    image: "/moments/graduate-story.jpg",
  },
  {
    id: "hackathon",
    title: "1st Place, Hajj Logistics Hackathon",
    blurb: "Top 20 of 221 teams, awarded by judges from the Ministry of Hajj & Umrah.",
    tag: "Win",
    glyph: "★",
    image: "/moments/hackathon.jpg",
  },
  {
    id: "chess-tournament",
    title: "Top 3 at the SEU Chess Tournament",
    blurb:
      "My third tournament and the biggest yet: eight universities, hosted by Saudi Electronic University. My team and I secured a Top 3 finish, and I won four of six games, every win by checkmate.",
    tag: "Chess",
    glyph: "♟",
    image: "/moments/chess.jpg",
    focus: "center 26%",
    tall: true,
  },
  {
    id: "mats",
    title: "On the Mats",
    blurb: "Training never stops. Blue belt, and still climbing one round at a time.",
    tag: "Discipline",
    glyph: "⚫",
    image: "/moments/jiu-jitsu.jpg",
    focus: "center 30%",
    tall: true,
  },
];

export const navLinks = [
  { id: "leadership", label: "Leadership" },
  { id: "moments", label: "Moments" },
  { id: "journey", label: "Journey" },
  { id: "engineering", label: "Engineering" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
