"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const NavbarStyles = styled(motion.div)`
  width: 100%;
  display: flex;
  /* -moz-box-pack: justify; */
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: rgba(10, 10, 10, 0.75);
  backdrop-filter: blur(4px);
  z-index: 5;
`;

export default NavbarStyles;
