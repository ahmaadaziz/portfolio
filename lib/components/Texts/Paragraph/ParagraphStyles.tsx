"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export interface ParagraphStyleProps {
  isSubheading?: boolean;
  maxWidth?: string;
  marginTop?: boolean
}

const ParagraphStyles = styled(motion.p)<ParagraphStyleProps>`
  max-width: ${({ maxWidth }) => maxWidth ?? "75%"};
  font-size: ${({ isSubheading }) =>
    isSubheading ? "clamp(1.5rem, 6vw, 2rem)" : "clamp(1.25rem, 4vw, 1.5rem)"};
  margin-top: ${({ marginTop }) => (marginTop ? "1.5rem" : "0")};
  line-height: 1.28;
  font-weight: 300;
`;
export default ParagraphStyles;
