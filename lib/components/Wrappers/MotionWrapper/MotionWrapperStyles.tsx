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
  justify-content: ${({ justify }) => justify};
  align-items: center;
  width: ${({ width }) => width};
  padding-top: ${({ pt }) => pt};

  @media screen and (max-width: 920px) {
    padding-top: 2rem;
  }

  @media screen and (max-width: 451px) {
    justify-content: start
  }
`;

export default MotionWrapperStyles;
