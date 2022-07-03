import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button, Grid, TextField } from "@mui/material";
import Header from "../header/Header";
import { motion } from "framer-motion";
import "./contact.css";
import LocationMap from "./LocationMap";
import { useState } from "react";
import { ContactInfo } from "../../types/contact";

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

const initialContact: ContactInfo = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(initialContact);
  let { name, email, subject, message } = contact;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClear = () => {
    setContact(initialContact);
  };

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header title="Get In Touch" icon={faPaperPlane} />
      <Grid container spacing={3} className="contact-container">
        <Grid item xs={12} sm={6}>
          <motion.form
            action={process.env.REACT_APP_POST_EMAIL}
            method="POST"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={1} direction="column">
              <Grid item container spacing={1}>
                <Grid item sm={6} xs={12}>
                  <motion.div variants={item}>
                    <TextField
                      name="name"
                      value={name}
                      onChange={(e) => handleChange(e)}
                      label="Name"
                      fullWidth
                      required
                      variant="filled"
                    />
                  </motion.div>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <motion.div variants={item}>
                    <TextField
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => handleChange(e)}
                      label="Email"
                      fullWidth
                      variant="filled"
                    />
                  </motion.div>
                </Grid>
              </Grid>
              <Grid item>
                <motion.div variants={item}>
                  <TextField
                    name="subject"
                    value={subject}
                    onChange={(e) => handleChange(e)}
                    label="Subject"
                    variant="filled"
                    fullWidth
                  />
                </motion.div>
              </Grid>
              <Grid item>
                <motion.div variants={item}>
                  <TextField
                    name="message"
                    onChange={(e) => handleChange(e)}
                    value={message}
                    label="Message"
                    variant="filled"
                    multiline
                    required
                    rows={4}
                    fullWidth
                  />
                </motion.div>
              </Grid>
              <Grid
                item
                container
                spacing={1}
                justifyContent="space-between"
                sx={{ mt: 0.05 }}
              >
                <Grid item>
                  <motion.div variants={item}>
                    <Button variant="outlined" onClick={handleClear}>
                      clear
                    </Button>
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div variants={item}>
                    <Button type="submit" variant="contained">
                      Send
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
          </motion.form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <motion.div variants={container} initial="hidden" animate="visible">
            <LocationMap />
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Contact;
