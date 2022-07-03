import { SkillListItem } from "../../types/skill-list-item";
import javascript from "../../assets/images/skills/javascript.png";
import typescript from "../../assets/images/skills/typescript.png";
import html from "../../assets/images/skills/html.png";
import css from "../../assets/images/skills/css.png";
import python from "../../assets/images/skills/python.png";
import bootstrap from "../../assets/images/skills/bootstrap.png";
import git from "../../assets/images/skills/git.png";
import github from "../../assets/images/skills/github.png";
import react from "../../assets/images/skills/react.png";
import redux from "../../assets/images/skills/redux.png";
import node from "../../assets/images/skills/node.png";
import mui from "../../assets/images/skills/mui.png";
import reactstrap from "../../assets/images/skills/reactstrap.png";
import mongodb from "../../assets/images/skills/mongodb.png";
import postgresql from "../../assets/images/skills/postgresql.png";

const skillList: SkillListItem[] = [
  {
    title: "Web Development",
    items: [
      {
        name: "Html5",
        image: html,
        alt: "html icon",
      },
      {
        name: "React js",
        image: react,
        alt: "react icon",
      },
      {
        name: "Redux",
        image: redux,
        alt: "redux icon",
      },
      {
        name: "Node js",
        image: node,
        alt: "node icon",
      },
    ],
  },
  {
    title: "Web Design",
    items: [
      {
        name: "Css3",
        image: css,
        alt: "css3 icon",
      },
      {
        name: "Material UI",
        image: mui,
        alt: "material ui icon",
      },
      {
        name: "Reactstrap",
        image: reactstrap,
        alt: "reactstrap icon",
      },
      {
        name: "Bootstrap",
        image: bootstrap,
        alt: "bootstrap icon",
      },
    ],
  },
  {
    title: "Programming",
    items: [
      {
        name: "Javascript",
        image: javascript,
        alt: "javascript icon",
      },
      {
        name: "Typescript",
        image: typescript,
        alt: "typescript icon",
      },
      {
        name: "Python",
        image: python,
        alt: "python icon",
      },
    ],
  },
  {
    title: "DB",
    items: [
      {
        name: "MongoDB",
        image: mongodb,
        alt: "mongodb icon",
      },
      {
        name: "PostgreSQL",
        image: postgresql,
        alt: "postgre sql icon",
      },
    ],
  },

  {
    title: "Version Control",
    items: [
      {
        name: "Git",
        image: git,
        alt: "git icon",
      },
      {
        name: "Github",
        image: github,
        alt: "github icon",
      },
    ],
  },
];

export default skillList;
