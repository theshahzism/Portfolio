import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  django,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  gericht,
  threejs,
  fiver,
  ned,
  gpt3,
  hoobank,
  live
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "MERN Stack Intern",
    company_name: "Smart City Lab, NEDUET",
    icon: ned,
    iconBg: "#fff",
    date: "February 2024 - Present",
    points: [
      "Assigned with the task of building fully functional react-native mobile applications.",
      "Working on React & other frameworks to build more beautiful user interfaces.",
      "Building projects to have hands-on on Node.js",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Fiverr",
    icon: fiver,
    iconBg: "#1dbf73",
    date: "Jan 2024 - Present",
    points: [
      "Serving globally by building designs and implementing responsive front-end.",
      "Offering services in HTML, CSS, Tailwind, Bootstrap and JavaSript/React.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gericht Restaurant",
    description:
      "Gericht is a modern restaurant landing page made with React and BEM model of CSS. The web interface is easily turnable into any high end bussiness as it has the best user interface and user experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "BEM-CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gericht,
    source_code_link: "https://github.com/theshahzism/Gericht",
    live_link: "https://theshahzism.github.io/Gericht/",
  },
  {
    name: "GPT3",
    description:
      "GPT3 is a landing page with stunning UI made with React and BEM model of CSS. The web application is fully responsive, has high quality images, gradients and is a market place showcasing multiple features of an AI product.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "BEM-CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/theshahzism/GPT3",
    live_link: "https://theshahzism.github.io/GPT3/",
  },
  {
    name: "Hoobank",
    description:
      "Hoobank is a payment user interface made with Tailwind CSS. The application contains beautiful Hero & testimonials components. It is a Static UI which can easily be integrated with any backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/theshahzism/Hoobank",
    live_link: "https://theshahzism.github.io/Hoobank/",
  },
];

export { services, technologies, experiences, testimonials, projects };
