import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import Header from "../header/Header";

const About = () => {
  return (
    <div>
      <Header title="About me" icon={faCircleInfo} />
      <Typography variant="h6">
        I am a full-stack web developer who loves to design and develop
        beautiful websites. I have been coding for over a year and enjoying
        every part of my journey. I love documenting my journey by writing blog
        posts and teaching others through my writing.
      </Typography>
    </div>
  );
};

export default About;
