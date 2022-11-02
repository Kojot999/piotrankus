export type Projects = {
  name: string;
  logo: string;
  description: string;
  technologies: {
    react: string;
    sass?: string;
    scomponent?: string;
    docker?: string;
  };
  links: {
    git: string;
    website: string;
    gitlogo: string;
    weblogo: string;
  };
};
