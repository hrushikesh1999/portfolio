import {
  faHouse,
  faPaperPlane,
  faScrewdriverWrench,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Route } from "../../types/route";
import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Skills from "../skills/Skills";

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    icon: faHouse,
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    icon: faUser,
    component: About,
  },
  {
    path: "/skills",
    name: "Skills",
    icon: faScrewdriverWrench,
    component: Skills,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: faPaperPlane,
    component: Contact,
  },
];

export default routes;
