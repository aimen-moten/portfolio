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
    carrent,
    jobit,
    tripguide,
    threejs,
    ZYANA, 
    zyana1,
    ipserlab,
    dpu,
    wics,
    cosoc,
    python,
    java, 
    c, 
    R,
    wellnesswings,
    diversityhub,
    secrets,
    musehaven,
    inclusimap,
    businessincubator,
    equalwheels,
    memeify
  } from "../assets";
  
  export const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "Skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "startups",
      title: "Startups",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  // const services = [
  //   {
  //     title: "Front-end Development",
  //     icon: web,
  //   },
  //   {
  //     title: "Back-end Development",
  //     icon: backend,
  //   },
  //   {
  //     title: "Software Development",
  //     icon: mobile,
  //   },
  //   {
  //     title: "UI/UX Design",
  //     icon: creator,
  //   },
  // ];
  
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "R",
      icon: R,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },

  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "IpserLab",
      icon: ipserlab,
      iconBg: "#b2dcfa",
      date: "June 2023 - Present",
      points: [
        "Worked as a front-end developer in a team of 15+ engineers to create a flexible ecommerce web application and bring the startup idea to life.",
        "Reduced the payment process runtime by 50% through Stripe integration and developed the admin dashboard pages for a B2B website and redesigned the user interface using React.js and TailwindCSS.",
      ],
    },
    {
      title: "Web and Technology Intern",
      company_name: "Information Technology Associates Program at DePauw University",
      icon: dpu,
      iconBg: "#b2dcfa",
      date: "August 2022 - Present",
      points: [
        "Selected from a pool of 150+ applicants for admission to the highly prestigious Information Technology Associates Program, an immersive experience focused on mastering a variety of tech tools including HTML, CSS and Javascript.",
        "In a team of 3, leveraged R and Tableau to analyze and visualize provided datasets and report valuable findings and trends for improved and informed decision making.",
        "Independently conceptualized and executed 10+ projects to showcase proficiency in newly acquired skills."
      ],
    },
    {
      title: "Freshman Chair",
      company_name: "Women in Computer Science at DePauw University",
      icon: wics,
      iconBg: "#b2dcfa",
      date: "August 2022 - Present",
      points: [
        "Organized and moderated 12 events that promote the role of women in technical fields, including Tech workshops, Girl Hackathons and Information Sessions for Professional Development, resulting in a 50% increase in women participation in technical fields.",
        "Led team meetings and workshops to prepare 50+ members for Association for Computing Machinery’s Council on Women (ACM-W) conferences, resulting in an increase in networking opportunities, leadership skills, and a 35% increase in participation in ACM-W events."
      ],
    },
    {
      title: "Chair",
      company_name: "International Computer Science Association",
      icon: cosoc,
      iconBg: "#b2dcfa",
      date: "August 2022 - Present",
      points: [
        "Conducted workshops on technical concepts such as Git, and Python Data Structures to help over 100 international students build their portfolios, resulting in a 50% increase in the number of students securing internships.",
        "Helped over 100 students network with companies and organized a conference inviting software engineers from various companies."
      ],
    },
    {
      title: "Chief Executive Officer",
      company_name: "Zyana",
      icon: zyana1,
      iconBg: "#b2dcfa",
      date: "March 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Muse Haven",
      description:
        "A full-stack Blog Web App that allows users to create, track, and store their blog posts locally.",
      tags: [
        {
          name: "ejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: musehaven,
      source_code_link: "https://github.com/aimen-moten/muse-haven",
    },
    {
      name: "Secrets",
      description:
        "This application provides users with the ability to submit any piece of text or secret anonymously.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "ejs",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: secrets,
      source_code_link: "https://github.com/aimen-moten/secrets",
    },
    {
      name: "Wellness Wings",
      description:
        "WellnessWings is a mobile application prototype that allows students to take charge of their mental and physical health and well being.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: wellnesswings,
      source_code_link: "https://github.com/aimen-moten/wellness-wings-prototype",
    },
    {
      name: "Diversity Hub",
      description:
        "Diversity Hub is an all inclusive resource platform that allows CS majors to take advantage of mentors, DePauw alumni, campus organizations and their events, job and internship opportunities, referrals, leetcode buddies and more.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "jwt",
          color: "blue-text-gradient",
        },
      ],
      image: diversityhub,
      source_code_link: "https://github.com/aimen-moten/diversity-hub",
    },
    {
      name: "InclusiMap",
      description:
        "An accessibility map featuring accessible locations in NYC, allowing everyone can explore the area on equal footing",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        {
          name: "google-geocoding",
          color: "blue-text-gradient",
        },
        {
          name: "googlemaps-api",
          color: "blue-text-gradient",
        },
      ],
      image: inclusimap,
      source_code_link: "https://github.com/aimen-moten/inclusiMap",
    },
    {
      name: "Infinity Business Incubator",
      description:
        "A comprehensive platform for programs, resources, collaboration, and mentorship.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
      ],
      image: businessincubator,
      source_code_link: "https://github.com/aimen-moten/business-incubator",
    },
    {
      name: "Equal Wheels",
      description:
        "A ride-sharing app that focuses on empowering and supporting marginalized genders in accessing safe, reliable, and affordable transportation options.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
      ],
      image: equalwheels,
      source_code_link: "https://github.com/aimen-moten/EqualWheels",
    },
    {
      name: "Memeify!",
      description:
        "Interactive meme generator built using React.js where React Hooks and API calls are leveraged to generate memes.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "APIs",
          color: "blue-text-gradient",
        },
        
      ],
      image: memeify,
      source_code_link: "https://github.com/aimen-moten/memeify",
    },
  ];
  
  export { technologies, experiences, testimonials, projects };