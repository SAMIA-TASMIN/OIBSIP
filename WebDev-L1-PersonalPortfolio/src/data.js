// All portfolio content lives here - edit this file to update the site.

export const profile = {
  firstName: "Samia Tasmin",
  lastName: "Nova",
  brand: "Samia",
  title: "CSE Student & Aspiring Web Developer",
  intro:
    "I am a Computer Science and Engineering student passionate about building clean, responsive, and user-friendly websites. Currently, I am learning HTML, CSS, and Tailwind CSS while exploring modern web development.",
  photo: "/image.png",
  resume: "/resume.pdf",
  university: "International Islamic University Chittagong",
  email: "samiatasminnova@gmail.com",
  phone: "01893644344",
  phoneLink: "tel:+8801893644344",
  location: "Pahartali, Raozan, Chittagong, Bangladesh",
  socials: [
    { label: "GitHub", url: "https://github.com/SAMIA-TASMIN" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/samia-tasmin-nova/" },
    { label: "Facebook", url: "https://www.facebook.com/share/1CMpyv1oiL/" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 60 },
  { name: "Python", level: 80 },
];

export const projects = [
  {
    title: "Green Earth",
    tech: "HTML • Tailwind CSS • JavaScript",
    image: "/Greenearth.png",
    alt: "Green Earth Project",
    gradient: "from-cyan-500/20 to-blue-500/10",
    description:
      "A responsive plant shop website with plant categories, product cards, shopping cart functionality, and a clean modern interface.",
    link: "https://samia-tasmin.github.io/b12-green-eaarth/",
  },
  {
    title: "Heaven Furniture",
    tech: "HTML • CSS • Tailwind CSS",
    image: "/HeavenFurniture.png",
    alt: "Heaven Furniture Project",
    gradient: "from-purple-500/20 to-pink-500/10",
    description:
      "A modern and responsive furniture website designed to showcase luxury furniture and interior styling with a clean and elegant user interface.",
    link: "https://samia-tasmin.github.io/Heaven-Furniture/",
  },
  {
    title: "Responsive Web Project",
    tech: "HTML • CSS • Responsive Design",
    image: "/ResponsiveProject.png",
    alt: "Responsive Web Project",
    gradient: "from-orange-500/20 to-yellow-500/10",
    description:
      "A responsive website created to practice modern layouts, typography, spacing, and mobile-friendly design.",
    link: "https://samia-tasmin.github.io/Simple-Responsive/",
  },
];

export const certificates = [
  {
    title: "Machine Learning with Python",
    image: "/machine-learning-certificate.png",
    alt: "Machine Learning with Python Certificate",
    description:
      "80-hour training conducted by IICT, Chittagong University of Engineering & Technology.",
    date: "Apr 2026 – May 2026",
  },
  {
    title: "Complete Web Development",
    image: "/web-development-certificate.png",
    alt: "Complete Web Development Course Certificate",
    description:
      "Completed a comprehensive web development course covering JavaScript, HTML, CSS, React and projects.",
    date: "Programming Hero · Batch 12",
  },
  {
    title: "Mobile App Development",
    image: "/mobile-app-certificate.png",
    alt: "Mobile App Development Certificate",
    description:
      "80-hour training on Android, Flutter and iOS conducted by IICT, Chittagong University of Engineering & Technology.",
    date: "Nov 2024 – Jan 2025",
  },
];

export const education = [
  {
    label: "Bachelor of Science",
    title: "Computer Science & Engineering",
    school: "International Islamic University Chittagong",
    description:
      "Currently studying Computer Science and Engineering with an interest in software development, web technologies, and computer vision.",
  },
  {
    label: "Continuous Learning",
    title: "Web Development",
    school: null,
    description:
      "Currently practicing HTML, CSS, Tailwind CSS and gradually expanding my knowledge of JavaScript and modern web development.",
  },
];
