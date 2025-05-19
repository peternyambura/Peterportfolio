
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "IT Manager",
    company_name: "ELORA Supply & Logistics Ltd",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Managing all IT operations for warehousing, procurement, and distribution systems.",
      "Customizing and maintaining Odoo ERP modules to streamline inventory and logistics.",
      "Collaborating with logistics and operations teams to align technology with business goals.",
      "Leading IT infrastructure upgrades, vendor relationships, and system integrations.",
      "Ensuring data security, compliance, and system performance across all platforms.",    
    ],
  },
  {
    title: "Freelance Software Developer",
    company_name: "Freelance",
    icon: tekisky,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Present",
    points: [
      "Developed full-stack web applications using React, TailwindCSS, and Flask.",
      "Worked directly with clients to gather requirements and deliver customized solutions.",
      "Deployed scalable apps and ensured responsiveness across devices.",
      "Implemented RESTful APIs, authentication flows, and third-party integrations.",
      "Conducted code reviews and provided ongoing support for deployed applications.",    
    ],
  },
  {
    title: "Graphics & UI/UX Designer",
    company_name: "Mepujoy Enterprises",
    icon: github,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
      "Created UI mockups, wireframes, and visual assets for digital platforms.",
      "Conducted user research and usability testing to refine user experiences.",
      "Delivered marketing graphics, infographics, and consistent branding materials.",
      "Collaborated with dev and business teams to align design with user goals.",
      "Optimized user interfaces for optimal user experience.",
    ],
  },
  {
    title: "ICT Intern – Computer Science Program",
    company_name: "County Government of Baringo (Ajira Digital Program)",
    icon: github,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
      "Participated in the Ajira Digital-powered ICT internship as part of a Computer Science diploma.",
      "Worked in the County ICT department supporting system maintenance, networking, and public service digitization.",
      "Assisted in troubleshooting, hardware setup, software updates, and basic IT support for county offices.",
      "Gained hands-on experience with real-world government tech infrastructure and service delivery platforms.",
    ],
  },
  {
    title: "IT Specialist",
    company_name: "Mepujoy Enterprises",
    icon: github,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
      "Configured and maintained network infrastructure, systems, and user access.",
      "Provided technical support, system upgrades, and security enhancements.",
      "Customized IT setups based on departmental requirements and business needs.",
      "Led internal troubleshooting and trained staff on digital tools and platforms.",    ],
  },
  {
    title: "Freelance IT Consultant",
    company_name: "Various Clients",
    icon: github,
    iconBg: "#E6DEDD",
    date: "2020 - present",
    points: [
      "Installed and secured network systems for small businesses and individuals.",
      "Delivered remote and on-site IT support, consultations, and system configurations.",
      "Upgraded hardware/software infrastructure and optimized workflows.",
      "Handled multi-client project timelines, budgets, and solution delivery.",
      "Provided training on software tools and best practices for clients.",    
    ],
  },
  {
    title: "Sales Representative (Part-Time)",
    company_name: "Trinity Auto Spare",
    icon: github,
    iconBg: "#E6DEDD",
    date: "2017 - 2019",
    points: [
      "Assisted customers with product selection and order processing.",
      "Managed inventory and performed regular stock checks.",
      "Processed payments and maintained accurate sales records.",
      "Ensured a clean, organized, and customer-friendly retail environment.",    
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Tekisky Mart",
    description:
      "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
