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

export const Circle = styled(motion.div)`
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 2;

  &::after {
    content: "";
    opacity: 0;
    width: 20px;
    height: 20px;
    position: absolute;
    inset: 0px;
    margin: auto;
    border: 2px solid var(--text);
    border-radius: 50%;
    transition: opacity 0.09s cubic-bezier(0.39, 0.575, 0.565, 1) 0s;
  }

  &:hover::after {
    opacity: 1;
  }
`;
