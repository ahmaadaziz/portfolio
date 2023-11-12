"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export interface Props {
  secondary?: boolean;
  marginTop?: boolean
  rounded?: boolean
}

const BasicButtonStyles = styled(motion.a)<Props>`
  pointer-events: all;
  text-decoration: none;
  background-color: ${(props) => (props.secondary ? "transparent" : "black")};
  color: ${(props) => (props.secondary ? "black" : "white")};
  width: 175px;
  height: 55px;
  border: ${(props) => (props.secondary ? "2px solid black" : "none")};
  margin-top: ${(props) => (props.marginTop ? "3rem" : "0")};
  border-radius: ${(props) => (props.rounded ? "100px" : "5px")};
  font-weight: 400;
  display: grid;
  place-items: center;
  will-change: transform;

  @media (max-width: 451px) {
    width: 150px;
    height: 55px;
    display: grid;
    font-size: 18px;
  }
`;

export default BasicButtonStyles;
