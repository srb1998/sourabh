import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nextjs,
    mysql,
    solidity,
    zustand,
    git,
    wns,
    plex,
    prompt,
    spiderverse,
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
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
      name: "Python",
      icon: python,
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
      name: "Next.js",
      icon: nextjs,
    },
    {
      name: "Zustand",
      icon: zustand,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "WNS Global Services",
      icon: wns,
      iconBg: "#383E56",
      date: "September 2021 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        `Developed and implemented a front-end architecture using React, resulting in a 25% increase in page load speed
        and a 15% increase in overall performance.`,
        "Designed and developed user-friendly front-end components, ensuring an intuitive and visually appealing interface.",
        "Implemented React Hooks enhancing code reusability and efficiency.",
        "Collaborated with stakeholders to determine the best solutions for user experience.",
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
      name: "Plex",
      description:
        "Plex is a user-friendly platform that simplifies your entertainment choices. Discover trending movies and TV shows, explore popular picks based on audience ratings, and get recommendations. It's your quick and easy guide to find what to watch next!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: plex,
      live_link: "https://plex-seven.vercel.app/",
    },
    {
      name: "Prompt.ai",
      description:
        "Discover prompt.ai! Seamlessly search for prompts on-the-go, crafted with Next.js for optimal user experiences. Featuring secure next-auth authentication, efficient CRUD operations, and a sleek interface.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Auth",
          color: "green-text-gradient",
        },
      ],
      image: prompt,
      live_link: "https://prompt-ai-srb1998.vercel.app/",
    },
    {
      name: "SpiderVerse Universe",
      description:
        "Welcome to the SpiderVerse Universe, a space where you can explore the Whitelist DApp, mint SpiderVerse NFTs, and participate in the initial coin offering. Join the adventure where blockchain and creativity converge!",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "hardhat",
          color: "pink-text-gradient",
        },
      ],
      image: spiderverse,
      live_link: "https://spiderverse-nft.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
