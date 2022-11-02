import { Projects } from "../types/index";

export const projects: Projects[] = [
  {
    name: "gamebase",
    logo: "logos/reaCT.svg",
    description:
      "GameBase is an app that use RAWG APPI to present massive collection of games, platforms and stores",
    technologies: {
      react: "React",
      sass: "Sass",
    },
    links: {
      git: "https://github.com/Kojot999/gamebase",
      website: "https://gamebase-rawg.netlify.app/",
      gitlogo: "logos/gitcopy.svg",
      weblogo: "logos/web.svg",
    },
  },
  {
    name: "msTranslate",
    logo: "logos/reaCT.svg",
    description:
      "msTranslate is an light translator app that use API from LibreTranslate and is set up on Docker ",
    technologies: {
      react: "React",
      scomponent: "S-components",
      docker: "Docker",
    },
    links: {
      git: "https://github.com/Kojot999/msTranslate",
      website: "Docker",
      gitlogo: "logos/gitcopy.svg",
      weblogo: "logos/web.svg",
    },
  },
];
