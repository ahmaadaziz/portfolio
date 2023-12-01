"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { HeadingStyleProps } from "../HeadingProps";

export interface IProps extends HeadingStyleProps {
  mainHeading?: boolean;
  isName?: boolean;
}

const Heading1Styles = styled(motion.h1)<IProps>`
  font-size: ${(props) =>
    props.mainHeading
      ? "clamp(2.3rem, 9vw, 5rem)"
      : props.isName
      ? "clamp(2rem, 14vw, 9rem)"
      : "clamp(2rem, 5.5vw, 3rem)"};
  margin: 0px;
  font-weight: ${(props) => props.boldness};
  display: block;
`;
export default Heading1Styles;
