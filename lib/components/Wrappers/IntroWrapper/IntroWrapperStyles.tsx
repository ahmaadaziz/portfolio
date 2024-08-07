"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export interface StyleProps {
  direction?: "row" | "column";
  width?: string;
  mt?: boolean;
  overflowHidden?: boolean;
  smallGap?: boolean;
}

const IntroWrapperStyles = styled(motion.div)<StyleProps>`
    width: ${(props) => props.width ?? "fit-content"};
    overflow: ${(props) => props.overflowHidden ? "hidden" : "visible"};
    display: flex;
    flex-direction: ${(props) => props.direction};
    gap: ${({ smallGap }) => smallGap ? "1rem" : "5rem"};
    margin-top: ${(props) => props.mt ? "3rem" : "0"};

    ${`@media (max-width: 451px)`} {
        gap: 2rem;
    }

    ${`@media only screen and (max-width: 1025px)`} {
        width: 100%;
        align-items: center;
    }
`;

export default IntroWrapperStyles;
