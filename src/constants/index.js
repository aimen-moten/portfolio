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
      date: "June 2023 - August 2023",
      points: [
        "Incoming Software Engineering Intern"
      ],
    },
    {
      title: "Web and Technology Intern",
      company_name: "Information Technology Associates Program at DePauw University",
      icon: dpu,
      iconBg: "#b2dcfa",
      date: "August 2022 - Present",
      points: [
        "Created multimedia exhibits, and configured and operated a Windows touchscreen kiosk to showcase those exhibits, student projects, visualization tables, and interactive games.",
        "Collaborated with 3 interns to visualize the provided dataset using Tableau.",
      ],
    },
    {
      title: "Chair",
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
      title: "Junior Chair",
      company_name: "Computing Opportunities for Students of Color",
      icon: cosoc,
      iconBg: "#b2dcfa",
      date: "August 2022 - Present",
      points: [
        "Conducted workshops on technical concepts such as Git, JUnit, and Python Data Structures to help over 100 international students build their portfolios, resulting in a 50% increase in the number of students securing internships.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { technologies, experiences, testimonials, projects };