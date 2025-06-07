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
  Portfolio,
  studyNotion,
  blog
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
  {
    title: "Content Creator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN stack Developer",
    company_name: "E-learning app",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Built a full-stack E-Learning web application using MERN stack with role-based access for Admin and Student.",
      "Integrated JWT-based authentication and authorization to securely manage user sessions and protect role-specific routes.",
      "Implemented Admin functionalities to create, update, and delete courses, providing full control over course content management.",
      "Designed the Student module to allow users to register, purchase courses, and access learning materials only after successful payment and login.",
      "Applied React.js for dynamic UI, MongoDB for scalable data storage, and Express.js with Node.js to build a secure and maintainable backend."
    ],
  },
  {
    title: "React Developer",
    company_name: "Blog App",
    icon: tailwind,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed a Blog Management System using MERN stack featuring role-based access control for Admin and User roles. ",
      "Implemented JWT-based authentication and authorization to secure routes and ensure only authenticated users can access specific functionalities.",
      "Built a User module allowing registered users to log in and read blog content, enhancing user engagement and access control.Enabled Admin functionalities including creating, editing, and deleting blog posts, with real-time updates on the frontend.",
      "Ensured a seamless UI/UX by integrating React hooks and conditional rendering, along with responsive design principles for accessibility across devices.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Weather App",
    icon: threejs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Fetches real-time weather data using OpenWeather API.",
      "Allows users to search weather by city name.",
      "Displays temperature, weather condition, and location info.",
      "Built using React with functional components and hooks.",
    ],
  },
  {
    title: "Portfolio (React 3 js)",
    company_name: "Personal portfolio",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
     "Built using React and Three.js for an interactive UI.",
     "Features a responsive Navbar for easy navigation.",
     "Hero and About sections introduce personal background.",
     "Experience, Tech, and Works showcase skills and projects.",
     "Contact section enables quick communication."
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
    name: "E-Learning App",
    description:
      "This MERN stack e-learning platform offers dedicated modules for students and instructors. Students can enroll in courses and track progress, while instructors manage content and enrollments. It features secure authentication, role-based access, and a clean, responsive UI.",
    tags: [
      {
        name: "react",
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
    image: studyNotion,
    source_code_link: "https://github.com/Prathmeshc99/myProject",
  },
  {
    name: "Blog App",
    description:
      "This weather app is built using React and integrates the OpenWeather API. It allows users to search for any city and view current weather details. The app displays temperature, weather conditions, and location data. Designed with a clean UI and responsive layout for all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openweatherapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Prathmeshc99/blog-app",
  },
  {
    name: "Personal Portfolio",
    description:
      "Built using React and Three.js for an interactive UI. Features a responsive Navbar for easy navigation. Hero and About sections introduce personal background. Experience, Tech, and Works showcase skills and projects. Contact section enables quick communication.",
    tags: [
      {
        name: "react3.js",
        color: "blue-text-gradient",
      },
      {
        name: "canvas",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/Prathmeshc99/portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
