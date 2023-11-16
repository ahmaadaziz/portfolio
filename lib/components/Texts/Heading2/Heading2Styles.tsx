"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import {HeadingStyleProps} from "../HeadingProps";

export interface IProps extends HeadingStyleProps {}

const Heading2Styles = styled(motion.h2)<IProps>`
  font-size: clamp(2rem, 5.5vw, 3rem);
  margin: 0px;
  font-weight: ${(props) => props.boldness};
`;
export default Heading2Styles;
