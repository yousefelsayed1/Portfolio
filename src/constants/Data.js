import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";

import html from "../assets/techstack/html.png";
import css from "../assets/techstack/css.png";
import sass from "../assets/techstack/sass.png";
import js from "../assets/techstack/js.png";
import react from "../assets/techstack/react.png";
import redux from "../assets/techstack/redux.png";
import tailwind from "../assets/techstack/tailwind.png";
import bootstrap from "../assets/techstack/bootstrap.png";
import vscode from "../assets/techstack/vscode.png";
import github from "../assets/techstack/github.png";
import git from "../assets/techstack/git.png";
import npm from "../assets/techstack/npm.png";
import postman from "../assets/techstack/postman.png";
import figma from "../assets/techstack/figma.png";

import projectImage1 from "../assets/projects/project1.jpg";
import projectImage2 from "../assets/projects/project2.jpg";
import projectImage3 from "../assets/projects/project3.jpg";
import projectImage4 from "../assets/projects/project4.jpg";
import projectImage5 from "../assets/projects/project5.jpg";
import projectImage6 from "../assets/projects/project6.jpg";

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
    id: "technologies",
    title: "Technologies",
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
