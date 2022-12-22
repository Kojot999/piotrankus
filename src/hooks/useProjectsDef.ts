import { useLanguageContext } from "../context/useLanguageContext";
import { Projects } from "../types/index";

export const useProjectsDef = () => {
  const T = useLanguageContext();

  const projects: Projects[] = [
    {
      name: "gamebase",
      logo: "logos/GameBase.svg",
      description: T.components.projects.descriptionGameBase,
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
      logo: "logos/msTr.svg",
      description: T.components.projects.descriptionTranslate,
      technologies: {
        react: "React",
        scomponent: "S-components",
        docker: "Docker",
      },
      links: {
        git: "https://github.com/Kojot999/msTranslate",
        website: "https://github.com/Kojot999/msTranslate",
        gitlogo: "logos/gitcopy.svg",
        weblogo: "logos/web.svg",
      },
    },
    {
      name: "Firma Ankus",
      logo: "logos/Ankus.svg",
      description: T.components.projects.descriptionAnkus,
      technologies: {
        react: "React",
        sass: "Sass",
      },
      links: {
        git: "https://github.com/Kojot999/Firma-Ankus",
        website: "https://www.ankus.pl/",
        gitlogo: "logos/gitcopy.svg",
        weblogo: "logos/web.svg",
      },
    },
  ];
  return { projects };
};
