import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Schooling",
    company_name: "Hillock Internal school",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2018 - April 2020",
    points: [
      
      "",
    ],
  },
  {
    title: "Under-Grad",
    company_name: "KCT",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Feb 2024",
    points: [
      
      "Computer science Engineer under-grad at kct",
    ],
  },
];

const testimonials = [

  {
    testimonial:
      "It was good experience collaborating with pugal developing my company's landin website.",
    name: "Mr. XYZ",
    designation: "CFO",
    company: "XYZ ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've had good experience collaborating with pugal for developing my company's branding designs",
    name: "Mr. XYZ",
    designation: "XYZ",
    company: "XYZ",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Plogger",
    description:
      "Web-based blogging platform that allows users to write, publish and see blogs.",
    tags: [
      {
        name: "NEXT JS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://plogger.vercel.app/",
  },
  {
    name: "DIRECT FARMER OUTLET SELLING PORTAL",
    description:
      "Web application that enables farmers and consumers to sell and buy agro-products.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS#",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://gitpugal.github.io/farm/",
  },
  {
    name: "WEATHER FORECASTING WEB-APP",
    description:
      "Web-application that enables the users to see the predict weather of their place and get current weather alerts.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "HTML%",
        color: "green-text-gradient",
      },
      {
        name: "css#",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://infinite-island-53572.herokuapp.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };