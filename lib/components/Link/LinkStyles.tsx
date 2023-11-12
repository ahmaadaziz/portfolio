"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const LinkStyles = styled(motion.a)`
  position: relative;
  background-color: transparent;
  color: black;
  pointer-events: all;
  font-size: 2.25rem;
  cursor: pointer;
  display: block;
  font-weight: 400;
  padding-bottom: 2px;
  margin-bottom: 2px;
  width: max-content;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1.5px;
    background: black;
    bottom: 0px;
    right: 0px;
    transition: width 0.3s ease-in-out 0s;
  }

  &:hover::after {
    width: 100%;
    left: 0px;
    right: auto;
  }
`;
export default LinkStyles;
