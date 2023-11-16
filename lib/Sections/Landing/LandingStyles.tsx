"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";

const beforeAnim = keyframes`
  from {
    transform: rotateZ(0deg) translateX(0px) translateY(-50px);
    border: 1px solid rgba(91, 91, 91, 0);
  }

  to {
    transform: rotateZ(360deg) translateX(-20px) translateY(-10px) scale(1.2);
    border: 1px solid rgba(91, 91, 91, 0.35);
  }
`;

const afterAnim = keyframes`
  from {
    transform: rotateZ(0deg) translateX(0px) scale(1);
    border: 1px solid rgba(91, 91, 91, 0);
  }

  to {
    transform: rotateZ(360deg) translateX(50px) scale(1.1) ;
    border: 1px solid rgba(91, 91, 91, 0.35);
  }
`;

export const LandingContainerStyles = styled.div`
  width: 100%;
  max-height: 700px;
  height: 82vh;
  position: relative;
  display: grid;
  place-items: center flex-start;

  &::before {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    z-index: 2;
    background-color: transparent;
    border: 1px solid rgba(91, 91, 91, 0);
    transform: scale(0);
    transition: transform 1.75s ease-in-out 2.5s;
    will-change: transform;

    top: 20%;
    right: 0%;
    transform: scale(1) translateY(-50px);
    animation: ${beforeAnim} 8s ease-in-out infinite alternate none running;
  }
`;

export const IntroContainerStyles = styled(motion.div)`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 4;
  margin-bottom: 75px;

  &::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    top: -20%;
    right: 30%;
    z-index: -1;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid rgba(91, 91, 91, 0);
    transform: scale(0);
    transition: transform 1.75s ease-in-out 2.5s;
    will-change: transform;

    transform: scale(1);
    animation: ${afterAnim} 10s ease-in-out infinite alternate none running;
  }
`;
