import Typography, { TypographyProps } from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Fragment, ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

interface AnimatedTypographyProps extends TypographyProps {
  text: string;
}

const container = {
  visible: {
    transition: {
      // delayChildren: 0.3,
      staggerChildren: 0.005,
    },
  },
};
const item = {
  hidden: {
    y: "-40",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Typography style={{ whiteSpace: "pre", display: "inline" }}>
      {children}
    </Typography>
  );
};

const AnimatedTypography = ({ text, ...rest }: AnimatedTypographyProps) => {
  const splitWords = text.split(" ");
  const words: string[][] = [];
  splitWords.forEach((item) => {
    let word = [];
    for (let char of item) {
      word.push(char);
    }
    word.push(" ");
    words.push(word);
  });

  const renderByWord = () => {
    return (
      <Fragment>
        {words.map((word, i) => (
          <Wrapper key={i}>
            <motion.span
              variants={item}
              style={{
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <Typography
                component="span"
                {...rest}
                style={{ display: "inline-block" }}
              >
                {word}
              </Typography>
            </motion.span>
          </Wrapper>
        ))}
      </Fragment>
    );
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {words.map((word, i) => {
        return (
          <Wrapper key={i}>
            {word.map((char, si) => {
              return (
                <motion.span
                  variants={item}
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={i + "" + si}
                >
                  <Typography
                    component="span"
                    {...rest}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </Typography>
                </motion.span>
              );
            })}
          </Wrapper>
        );
      })}
    </motion.div>
  );
};

export default AnimatedTypography;
