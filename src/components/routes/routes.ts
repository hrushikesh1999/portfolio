import {
  faHouse,
  faPaperPlane,
  faScrewdriverWrench,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ABOUT, CONTACT, HOME, SKILLS } from "../../constants";
import { Route } from "../../types/route";
import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Skills from "../skills/Skills";

const routes: Route[] = [
  {
    path: HOME,
    name: "Home",
    icon: faHouse,
    color: "#26a69a",
    component: Home,
  },
  {
    path: ABOUT,
    name: "About",
    icon: faUser,
    color: "#616161",
    component: About,
  },
  {
    path: SKILLS,
    name: "Skills",
    icon: faScrewdriverWrench,
    color: "#1565c0",
    component: Skills,
  },
  {
    path: CONTACT,
    name: "Contact",
    icon: faPaperPlane,
    color: "#8d6e63",
    component: Contact,
  },
];

export default routes;
