import { Contact, Home, Projects, Resume, Skills } from "../components/layout";
import { useLanguageContext } from "../context/useLanguageContext";

export const useRouteDef = () => {
  const T = useLanguageContext();

  const ROUTES = [
    {
      name: T.components.header.home,
      path: "/",
      component: Home,
    },
    {
      name: T.components.header.projects,
      path: "/projects",
      component: Projects,
    },
    {
      name: T.components.header.skills,
      path: "/skills",
      component: Skills,
    },
    {
      name: T.components.header.resume,
      path: "/resume",
      component: Resume,
    },
    {
      name: T.components.header.contact,
      path: "/contact",
      component: Contact,
    },
  ];

  return { ROUTES };
};
