"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import {HeadingStyleProps} from "../HeadingProps";

export interface IProps extends HeadingStyleProps {
}

const Heading3Styles = styled(motion.h3)<IProps>`
    font-size: clamp(2rem, 5.5vw, 2.5rem);
    pointer-events: none;
`;
export default Heading3Styles;
