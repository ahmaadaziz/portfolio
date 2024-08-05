"use client";

import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";

interface IntroContainerStyleProps {
  showBgAnim?: boolean;
}

const beforeIntroAnim = keyframes`
    from {
        scale: 0;
        border: 1px solid rgba(163, 163, 163, 0);
    }

    to {
        scale: 1;
        transform: rotateZ(0deg) translateX(0px) translateY(-50px);
        border: 1px solid rgba(163, 163, 163, 1);
    }
`;

const beforeAnim = keyframes`
    from {
        transform: rotateZ(0deg) translateX(0px) translateY(-50px);
    }

    to {
        transform: rotateZ(360deg) translateX(50px) translateY(-10px) scale(1.2);
    }
`;

const afterIntroAnim = keyframes`
    from {
        scale: 0;
        border: 1px solid rgba(163, 163, 163, 0);
    }

    to {
        scale: 1;
        transform: rotateZ(0deg) translateX(0px) scale(1);
        border: 1px solid rgba(163, 163, 163, 0.35);
    }
`;

const afterAnim = keyframes`
    from {
        transform: rotateZ(0deg) translateX(0px) scale(1);
    }

    to {
        transform: rotateZ(360deg) translateX(50px) scale(1.1);
    }
`;

export const LandingContainerStyles = styled.div`
    width: 100%;
    max-height: 700px;
    height: 82vh;
    position: relative;
    display: grid;
    place-items: center flex-start;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 450px;
        height: 450px;
        border-radius: 50%;
        z-index: 2;
        background-color: transparent;
        border: 1px solid rgba(91, 91, 91, 0);
        transition: transform 1.75s ease-in-out 2.5s;
        will-change: transform;

        top: 20%;
        right: 0;
        transform: scale(1) translateY(-50px);

        animation: ${beforeIntroAnim} 2.5s ease-out forwards, ${beforeAnim} 6s ease-in-out infinite alternate none running;
        animation-delay: 5s, 7.5s;
    }
`;

const afterAnimComp = css`
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
        transition: transform 1.75s ease-in-out 2.5s;
        will-change: transform;

        transform: scale(1);
        animation: ${afterIntroAnim} 2.5s ease-out forwards, ${afterAnim} 5s ease-out infinite alternate none running;
        animation-delay: 5s, 7.5s;
    }
`;

export const IntroContainerStyles = styled(
  motion.div
)<IntroContainerStyleProps>`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ showBgAnim }) => showBgAnim && afterAnimComp}
`;
