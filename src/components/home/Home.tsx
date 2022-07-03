import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ABOUT, CONTACT } from "../../constants";
import "./home.css";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const actionItem = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.div variants={item}>
          <Typography variant="h3" color="text.secondary">
            Hi, my name is
          </Typography>
        </motion.div>
        <motion.div variants={item}>
          <Typography
            variant="h1"
            color="primary.dark"
            sx={{ mt: 1, fontSize: "calc(30px + 7vw)" }}
          >
            Hrushikesh
          </Typography>
        </motion.div>
        <motion.div variants={item} style={{ marginTop: "0.5rem" }}>
          <Typography variant="h3" component="span" color="text.secondary">
            I'm a{" "}
          </Typography>
          <Typography variant="h3" component="span">
            Web Developer.{" "}
          </Typography>
        </motion.div>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item>
            <motion.div variants={actionItem}>
              <Link to={CONTACT}>
                <Button sx={{ textTransform: "none" }} variant="outlined">
                  Reach out to me!
                </Button>
              </Link>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div variants={actionItem}>
              <Link to={ABOUT}>
                <Button sx={{ textTransform: "none" }} variant="outlined">
                  About me
                </Button>
              </Link>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </motion.div>
  );
};

export default Home;
