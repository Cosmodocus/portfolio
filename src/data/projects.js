import Finance from "../assets/finance.png";
import Pokedex from "../assets/Pokedex.png";
import ZipLinkz from "../assets/Ziplinkz.png";
import Sushi from "../assets/kaiyo-sushi.png";
import MarvelAI from "../assets/Marvel-ToolPage.png";
import Inventory from "../assets/inventory.png";
import {skills} from "../constants";
export const projects = [
  {
    image: MarvelAI,
    title: "Marvel AI",
    description:
      "An Educational AI-Assistant Platform that helps improve the workflow of educators and learners through AI generative tools and a Chatbot",
    githubLink: "https://github.com/radicalxdev/marvel-platform",
    liveDemoLink: "https://app.marvelai.org/",
    skills: [
      skills.nextjs,
      skills.react,
      skills.redux,
      skills.mui,
      skills.nodejs,
      skills.firebase,
    ],
    mainFocus: true,
  },
  {
    image: Inventory,
    title: "Inventory Management Dashboard",
    description: "A dashboard for checking and managing your inventory such as products, users, and more.",
    comingSoon: true,
    skills: [skills.nextjs, skills.react, skills.redux, skills.typescript, skills.mui, skills.nodejs, skills.postgresql, skills.aws],
  },
  {
    image: ZipLinkz,
    title: "ZipLinkz URL Shortener",
    description: "A Mock URL shortening web app inspired by Bitly and Ow.ly",
    githubLink: "https://github.com/Cosmodocus/ziplinkz",
    liveDemoLink: "https://reztech-ziplinkz.netlify.app/",
    skills: [skills.react, skills.typescript, skills.tailwind, skills.nodejs],
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

  {
    image: Sushi,
    title: "Sushi Website",
    description:
      "A website to explore a Sushi restaurant's menus, orders, and FAQ's",
    githubLink: "https://github.com/Cosmodocus/kaiyo-sushi-website",
    liveDemoLink: "https://reztech-kaiyo-sushi.netlify.app/",
    skills: [skills.react, skills.tailwind],
  },
  {
    image: Finance,
    title: "Landing Page",
    description: "A mock landing page focused on the data finance niche.",
    githubLink: "https://github.com/Cosmodocus/finance-responsive-landing-page",
    liveDemoLink: "https://reztech-finance.netlify.app/",
    skills: [skills.react, skills.tailwind],
  },
];