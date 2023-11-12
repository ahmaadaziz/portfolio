"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import {  } from "styled-components";

export interface StyleProps {
  justify: string;
  pt: string;
  width: string;
}

const MotionWrapperStyles = styled(motion.div)<StyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify}) => justify};
  align-items: center;
  width: ${({width}) => width};
  padding-top: ${({pt}) => pt};
`;

export default MotionWrapperStyles;
