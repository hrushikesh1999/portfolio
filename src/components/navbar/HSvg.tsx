import { motion } from "framer-motion";
import { useColorMode } from "../../ColorModeContextProvider";
import "./hSvg.css";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const HSvg = () => {
  const { mode } = useColorMode();
  return (
    <motion.div
      className="svg-container"
      // style={{ borderColor: mode === "light" ? "#37474f" : "#e0e0e0" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="svg-item"
        stroke={mode === "light" ? "#37474f" : "#e0e0e0"}
      >
        <motion.path
          d="M15 -15 l 0 110 z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M75 0 l 0 110 z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M0 50 h 0 100 z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default HSvg;
