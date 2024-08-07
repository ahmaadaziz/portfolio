"use client"

import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerLink = styled(motion.a)`
    cursor: pointer;
    text-decoration: none;
    color: var(--text);
    background-color: transparent;
    width: 100%;
`

export const MotionDiv = styled(motion.div)`
    cursor: pointer;
    width: 100%;
    height: auto;
  
`

export const ButtonDiv = styled.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
    position: relative;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid var(--accent);
    margin-bottom: 1.5rem;

    &::after {
        cursor: pointer;
        content: "";
        width: 100%;
        height: 2px;
        background: var(--text);
        position: absolute;
        bottom: -1.25px;
        transform: scaleX(0);
        transition: 0.4s ease-in-out;
        transform-origin: 0 50% 0;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`

export const ArrowCircle = styled.div`
    cursor: pointer;
    width: 75px;
    height: 75px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: var(--text);
    overflow: hidden;
    transform: scale(0.8);
    transition: transform 0.2s ease-in-out;
    pointer-events: none;
`
