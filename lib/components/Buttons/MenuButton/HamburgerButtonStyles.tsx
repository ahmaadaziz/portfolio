"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  margin: 1rem;
  place-items: center;
`;

export const LineContainer = styled(motion.div)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 10;
`;

export const LineOne = styled(motion.div)`
  cursor: pointer;
  position: absolute;
  width: 100%;
  background-color: var(--text);
`;

export const LineTwo = styled(motion.div)`
  cursor: pointer;
  position: absolute;
  background-color: var(--text);
`;
