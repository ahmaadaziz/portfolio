"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const ParagraphStyles = styled(motion.p)`
    max-width: 75%;
    font-size: clamp(1.25rem, 4vw, 1.5rem);
    margin-top: 1.5rem;
    line-height: 1.28;
    font-weight: 300;
`;
export default ParagraphStyles;
