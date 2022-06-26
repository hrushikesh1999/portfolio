import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const siteConfig = {
  copyright: "",
  author: {
    name: "A Hrushikesh",
    accounts: [
      {
        url: "https://github.com/hrushikesh1999",
        label: "Github Account",
        type: "gray",
        icon: faGithub,
      },
      {
        url: "https://www.linkedin.com/in/hrushi-kesh-6629b419b/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: faLinkedin,
      },
      {
        url: "mailto:hrushikesh007007@gmail.com",
        label: "Mail hrushikesh",
        type: "gray",
        icon: faEnvelope,
      },
    ],
  },
};

export default siteConfig;
