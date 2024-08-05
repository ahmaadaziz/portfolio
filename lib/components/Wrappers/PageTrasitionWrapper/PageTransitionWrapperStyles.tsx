"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export interface StyleProps {}

export const SlideInStyles = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--text);
    transform-origin: bottom;
    z-index: 100;
`;

export const SlideOutStyles = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--text);
  transform-origin: top;
  z-index: 100;
`;
