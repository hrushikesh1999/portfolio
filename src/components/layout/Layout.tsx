import * as React from "react";
import Box from "@mui/material/Box";
import "./layout.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { AnimatePresence } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
};

export default function DrawerAppBar(props: LayoutProps) {
  const { children } = props;

  return (
    <Box className="layout" color="text.primary" bgcolor="background.default">
      <Navbar />
      <Box component="main" className="main-content">
        <AnimatePresence>{children}</AnimatePresence>
      </Box>
      <Footer />
    </Box>
  );
}
