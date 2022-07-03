import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
import Header from "../header/Header";
import SkillItem from "./SkillItem";
import skillList from "./skillList";
import "./skills.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header title="Skills" icon={faScrewdriverWrench} />
      <motion.div variants={container} initial="hidden" animate="visible">
        <Grid container spacing={2}>
          {skillList.map((item, i) => (
            <Grid item sm={6} xs={12} key={i}>
              <SkillItem title={item.title} items={item.items} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
