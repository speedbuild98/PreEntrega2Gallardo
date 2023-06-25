// ════════════════════════ CONSTANTS ════════════════════════
// This file contains all the constants used in the project.
// ═══════════════════════════════════════════════════════════

// ════════ PAGE LINKS ════════
const getRandomId = () => {
  const min = 10000; 
  const max = 99999; 
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: `esto-es-un-num-random=${getRandomId().toString()}--->Necesito-agarrar-la-pala-ayuda`,
    title: "Error404",
  },
];

// ════════ SOCIAL LINKS ════════
export const socialLinks = [
  {
    url: "https://www.linkedin.com/in/lautagallardogg/",
    title: "Linkedin",
    icon: "FaLinkedin",
  },
  {
    url: "https://gallardolautaro.tech/",
    title: "Portfolio",
    icon: "FaAtom",
  },
  {
    url: "https://github.com/speedbuild98",
    title: "Github",
    icon: "FaGithub",
  },
];

// ════════ CATEGORIES ════════
export const categoryNames = [
  {
    id: "",
    title: "All Categories",
  },
  {
    id: "category/Audio",
    title: "Audio",
  },
  {
    id: "category/Cameras",
    title: "Cameras",
  },
  {
    id: "category/Drones",
    title: "Drones",
  },
  {
    id: "category/Gaming",
    title: "Gaming",
  },
  {
    id: "category/Laptops",
    title: "Laptops",
  },
  {
    id: "category/Monitors & TV",
    title: "Monitors & TV",
  },
  {
    id: "category/PC Accessories",
    title: "PC Accessories",
  },   
  {
    id: "category/Phone Accessories",
    title: "Phone Accessories",
  },
  {
    id: "category/Phones",
    title: "Phones",
  },
  {
    id: "category/Smart Home",
    title: "Smart Home",
  },
  {
    id: "category/Tablets & E-readers",
    title: "Tablets & E-readers",
  }
];