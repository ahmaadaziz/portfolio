"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export interface IProps {
  // mainHeading: boolean;
  boldness: number;
}

const Heading2Styles = styled(motion.h2)<IProps>`
  font-size: clamp(2rem, 5.5vw, 3rem);
  margin: 0px;
  font-weight: ${(props) => props.boldness};
  /* display: block; */
`;
export default Heading2Styles;
