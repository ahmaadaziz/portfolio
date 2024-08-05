"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const NavMenuStyles = styled(motion.div)`
  width: min(1200px, 100vw);
  margin: auto;
  height: 100vh;
  min-height: 600px;
  top: 0px;
  z-index: 6;
  position: fixed;
  background-color: var(--background);
  transform-origin: center top 0;
  will-change: transform;
`;

export default NavMenuStyles;
