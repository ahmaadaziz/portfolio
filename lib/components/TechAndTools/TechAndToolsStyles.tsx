"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export interface IProps {

}

export const TechAndToolsContainer = styled(motion.div)<IProps>`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
    gap: 3rem 6rem;

    @media only screen and (max-width: 641px) {
        gap: 2rem 4.5rem;
    }
`;

export const TTItemContainerStyles = styled(motion.div)<IProps>`
    width: 100%;
    height: auto;
`;

export const TTItemStyles = styled(motion.p)<IProps>`
    font-size: 20px;
    opacity: 0.75;
    font-weight: 400;
    line-height: 1.4;
`;