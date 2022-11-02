import { Contact, Home, Projects, Resume, Skills } from "../components/layout";
import { AppRoutes } from "../types";

export const ROUTES = [
  {
    name: "home",
    path: "/home",
    component: Home,
  },
  {
    name: "projects",
    path: "/projects",
    component: Projects,
  },
  {
    name: "skills",
    path: "/skills",
    component: Skills,
  },
  {
    name: "resume",
    path: "/resume",
    component: Resume,
  },
  {
    name: "hire me",
    path: "/contact",
    component: Contact,
  },
];
