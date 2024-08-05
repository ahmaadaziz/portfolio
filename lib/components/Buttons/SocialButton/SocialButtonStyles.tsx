"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export interface Props {
  origin: "right bottom" | "left bottom" | "right top" | "left top";
}

export const Wrapper = styled(motion.div)<Props>`
  border: 1px solid var(--background);
  cursor: pointer;
  width: 100%;
  transform-origin: ${(props) => props.origin + " 0px"};
  height: 40vh;
  position: relative;
  max-height: 400px;
  overflow: hidden;

  @media only screen and (max-width: 1025px) {
    border-radius: 50%;
    border: medium none !important;
    width: clamp(70px, 10vw, 110px);
    height: clamp(70px, 10vw, 110px);
  }
`;

export const Container = styled(motion.a)`
  cursor: pointer;
  pointer-events: all;
  display: block;
  width: 100%;
  height: 100%;
  
  &::after {
    cursor: pointer;
    content: "";
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 100%;
    margin: auto;
    opacity: 1;
    background-color: var(--accent);
    transition: opacity 0.8s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
  }

  &:hover::after {
    opacity: 0;
  }

  @media only screen and (max-width: 1025px) {
    width: 100%;
    height: 100%;
    position: static;
    display: grid;
    place-items: center;
  }
`;

export const Background = styled(motion.div)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
`;

export const ContentContainer = styled.div`
  cursor: pointer;
  width: max-content;
  position: absolute;
  z-index: 25;
  bottom: 40px;
  left: 50px;

  @media only screen and (max-width: 1025px) {
    position: static;
    display: grid;
    place-items: center;
  }
`;

export const Text = styled(motion.h2)`
  cursor: pointer;
  font-size: 2rem;
  color: white;
  font-weight: 400;
  margin-top: 0.75rem;

  @media only screen and (max-width: 1025px) {
    display: none;
  }
`;
