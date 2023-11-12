"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export interface IProps {
    mainHeading: boolean;
    boldness: number
}

const Heading1Styles = styled(motion.h1)<IProps>`
    font-size: ${(props) => props.mainHeading ? "clamp(2.3rem, 9vw, 5rem)" : "clamp(2rem, 5.5vw, 3rem)"};
    margin: 0px;
    font-weight: ${(props) => props.boldness};
    display: block;
`;
export default Heading1Styles;
