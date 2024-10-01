// import Finance from "../assets/finance.png";
import Pokedex from "../assets/Pokedex.png";
// import ZipLinkz from "../assets/Ziplinkz.png";
// import Sushi from "../assets/kaiyo-sushi.png";
import MarvelAI from "../assets/Marvel-AI-Revamp.png";
import Inventory from "../assets/inventory.png";
import GroupEnroll from "../assets/GroupEnroll.png";
import {skills} from "../constants";
export const projects = [
  {
    image: MarvelAI,
    title: "Marvel AI",
    description:
      "An Educational AI-Assistant Platform that helps improve the workflow of educators and learners through AI generative tools and a Chatbot",
    githubLink: "https://github.com/radicalxdev/marvel-platform",
    liveDemoLink: "https://ui-revamp.web.app/",
    skills: [
      skills.nextjs,
      skills.react,
      skills.redux,
      skills.mui,
      skills.nodejs,
      skills.firebase,
      skills.vercel,
    ],
    ongoingTag: true,
  },
  {
    image: Inventory,
    title: "Inventory Management Dashboard",
    description:
      "This full-stack inventory management dashboard allows you to monitor your sales summary, top-selling products, inventory levels, user data, and expenses!",
    githubLink: "https://github.com/Cosmodocus/inventory-management-app",
    liveDemoLink: "https://main.d2ic9x6mmm9crb.amplifyapp.com",
    skills: [
      skills.nextjs,
      skills.react,
      skills.redux,
      skills.typescript,
      skills.tailwind,
      skills.nodejs,
      skills.postgresql,
      skills.aws,
    ],
    newTag: true,
  },
  {
    image: GroupEnroll,
    title: "Group Enroll Admin Dashboard",
    description: "A mock admin dashboard for Group Enroll to showcase following similar brand design elements in their site but for an admin portal.",
    githubLink: "https://github.com/Cosmodocus/group-enroll-admin-dashboard",
    liveDemoLink: "https://groupenroll-admin-portal.netlify.app/",
    skills: [skills.react, skills.mui],
    newTag: true,
  },
  {
    image: Pokedex,
    title: "National Pokedex",
    description:
      "A national pokedex that contains detailed and information of over 1000 Pokemon in an easy-to-use interface",
    githubLink: "https://github.com/Cosmodocus/national-pokedex",
    liveDemoLink: "https://reztech-pokedex.netlify.app/",
    skills: [skills.html, skills.css, skills.javascript],
  },

  // {
  //   image: Sushi,
  //   title: "Sushi Website",
  //   description:
  //     "A website to explore a Sushi restaurant's menus, orders, and FAQ's",
  //   githubLink: "https://github.com/Cosmodocus/kaiyo-sushi-website",
  //   liveDemoLink: "https://reztech-kaiyo-sushi.netlify.app/",
  //   skills: [skills.react, skills.tailwind],
  // },
  // {
  //   image: Finance,
  //   title: "Landing Page",
  //   description: "A mock landing page focused on the data finance niche.",
  //   githubLink: "https://github.com/Cosmodocus/finance-responsive-landing-page",
  //   liveDemoLink: "https://reztech-finance.netlify.app/",
  //   skills: [skills.react, skills.tailwind],
  // },
];
