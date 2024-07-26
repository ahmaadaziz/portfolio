"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import {HeadingStyleProps} from "../HeadingProps";

export interface IProps extends HeadingStyleProps {
    sizeVariant?: "small" | "large";
}

const Heading2Styles = styled(motion.h2)<IProps>`
    font-size: ${({sizeVariant}) => sizeVariant === "small" ? "clamp(2rem, 5.5vw, 3rem)" : "clamp(3rem, 8vw, 5rem)"};
    margin: 0;
    font-weight: ${(props) => props.boldness};
`;
export default Heading2Styles;
