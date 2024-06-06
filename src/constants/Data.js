import {
  logo,
  profile,
  html,
  css,
  sass,
  js,
  react,
  redux,
  tailwind,
  bootstrap,
  vscode,
  github,
  git,
  npm,
  postman,
  figma,
  tech1,
  tech2,
  tech3,
  tech4,
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
  projectImage6,
} from "../assets";

export const logos = {
  logo: logo,
};

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const personalDetails = {
  name: "Yousef Elsayed",
  tagline: "frontend web developer",
  img: profile,
  about: `I'm a graduate developer with a strong background as a
  front-end developer, I have honed my skills and gained
  valuable experience from my college and Route Academy.
  I Write clean, maintainable, and efficient code following best practices and coding standards 
  with ability to troubleshoot and debug applications to optimize performance and resolve issues.`,
};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/youssef-elsayed-01271a288/",
  github: "https://github.com/yousefelsayed1?tab=repositories",
  gmail: "https://twitter.com/",
};

export const workDetails = [
  {
    Position: "Internship",
    Company: `Route Academy`,
    Location: "Cairo",
    Type: "Internship",
    Duration: "Nov 2023 - Apr 2024",
  },
  {
    Position: "Call Center Agent",
    Company: `AirArabia`,
    Location: "Giza",
    Type: "full time",
    Duration: "Nov 2023 - Apr 2024",
  },
];

export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, freecodeCamp",
    Location: "Online",
    Type: "Full Time",
    Duration: "Aug 2019 - Present",
  },
  {
    Position: "Bachelor of computer science",
    Company: `faculty of science`,
    Location: "Zagazig University",
    Type: "college",
    Duration: "Aug 2018 - june 2022",
  },
];

export const techStackDetails = [
  { id: 1, icon: html, name: "html" },
  { id: 2, icon: css, name: "css" },
  { id: 3, icon: js, name: "js" },
  { id: 4, icon: react, name: "react" },
  { id: 5, icon: redux, name: "redux" },
  { id: 6, icon: tailwind, name: "tailwind" },
  { id: 7, icon: bootstrap, name: "bootstrap" },
  { id: 8, icon: sass, name: "sass" },
];

export const techTolls = [
  { id: 1, icon: vscode, name: "vscode" },
  { id: 2, icon: postman, name: "postman" },
  { id: 3, icon: npm, name: "npm" },
  { id: 4, icon: git, name: "git" },
  { id: 5, icon: github, name: "github" },
  { id: 6, icon: figma, name: "figma" },
];

export const projectDetails = [
  {
    id: 1,
    title: "FreshCart-Ecommerce",
    image: projectImage1,
    techstack: "HTML/CSS, JavaScript, React.js, Bootstrap",
    previewLink: "https://fresh-cart-ecommerce-two.vercel.app/",
    githubLink: "https://github.com/yousefelsayed1/FreshCart-Ecommerce",
  },
  {
    id: 2,
    title: "joe cafe",
    image: projectImage6,
    techstack: "JavaScript, React.js, Tailwind, Framer-motion",
    previewLink: "https://joe-cafe.vercel.app/",
    githubLink: "https://github.com/yousefelsayed1/joe-cafe.git",
  },
  {
    id: 3,
    title: "My Portfolio",
    image: projectImage5,
    techstack: "JavaScript, React.js, Tailwind, Framer-motion",
    previewLink: "https://portfolio-joe-iota.vercel.app/",
    githubLink: "https://github.com/yousefelsayed1/Portfolio.git",
  },
  {
    id: 4,
    title: "Drug-Eye Crud website",
    image: projectImage2,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://yousefelsayed1.github.io/Drug-Eye/",
    githubLink: "https://github.com/yousefelsayed1/Drug-Eye",
  },
  {
    id: 5,
    title: "Coffee Heaven website",
    image: projectImage3,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://yousefelsayed1.github.io/coffee-heaven/",
    githubLink: "https://github.com/yousefelsayed1/coffee-heaven",
  },
  {
    id: 6,
    title: "Quote of the Day",
    image: projectImage4,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://yousefelsayed1.github.io/Quote-of-the-day/",
    githubLink: "https://github.com/yousefelsayed1/Quote-of-the-day.git",
  },
];

export const experiences = [
  {
    title: "React.js",
    icon: tech1,
    iconBg: "#383E56",
    points: [
      "I create responsive and interactive UIs using React component-based architecture, ensuring a seamless user experience.",
      "Experienced in tuning React applications for optimal performance, utilizing React built-in tools and best practices to minimize re-renders and optimize component updates.",
      "Committed to maintaining high code quality, with a focus on writing clean, testable, and maintainable code.",
    ],
  },
  {
    title: "Tailwind",
    icon: tech2,
    iconBg: "#E6DEDD",
    points: [
      "I have embraced the utility-first philosophy of Tailwind CSS, which has streamlined my workflow and allowed me to build interfaces with speed and precision.",
      "I have utilized Tailwind configuration file to extend the framework with custom themes and utilities, aligning the design with brand guidelines.",
      "I have implemented best practices such as using the @apply directive and PurgeCSS to keep the stylesheet size minimal and performance optimized.",
    ],
  },
  {
    title: "Framer motion",
    icon: tech3,
    iconBg: "#383E56",
    points: [
      " I have utilized Framer Motion intuitive animation logic to bring complex user interfaces to life, making them more engaging and interactive.",
      " I have used Framer Motion to create smooth and creative page transitions, improving the flow and narrative of the user journey.",
      " I have customized easing and timing to match the brand style and feel, creating a unique motion design language.",
    ],
  },
  {
    title: "Redux",
    icon: tech4,
    iconBg: "#E6DEDD",
    points: [
      "Proficient in managing application state using Redux, ensuring predictable state transitions and centralized data handling.",
      "Experienced in designing reducers and crafting actions to handle complex state changes in a scalable and maintainable way.",
      "Applied best practices for performance optimization, such as memoization and selectors to compute derived data, minimizing unnecessary re-renders",
    ],
  },
];
