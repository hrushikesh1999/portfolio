import {
  faBookOpenReader,
  faBriefcase,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { Stack } from "@mui/material";
import Header from "../header/Header";
import CustomCard from "../shared/cards/CustomCard";
import aboutConfig from "./aboutConfig";
import "./about.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Stack spacing={4} direction="column">
        <div>
          <Header title="Career" icon={faBriefcase} />
          <motion.div variants={container} initial="hidden" animate="visible">
            <Stack spacing={2} direction="column">
              {aboutConfig.career.map((item, i) => (
                <CustomCard content={item} key={i} />
              ))}
            </Stack>
          </motion.div>
        </div>
        <div>
          <Header title="Education" icon={faBookOpenReader} />
          <motion.div variants={container} initial="hidden" animate="visible">
            <Stack spacing={2} direction="column">
              {aboutConfig.education.map((item, i) => (
                <CustomCard content={item} key={i} />
              ))}
            </Stack>
          </motion.div>
        </div>
      </Stack>
    </motion.div>
  );
};

export default About;
