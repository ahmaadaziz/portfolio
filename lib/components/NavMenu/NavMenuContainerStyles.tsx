"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const NavMenuContainerStyles = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  place-items: center;

  ${`@media only screen and (max-width: 1025px)`} {
    grid-template-columns: 1fr;
grid-template-rows: 50%;
max-height: 100vh;
gap: 5rem;
  }
`;

export default NavMenuContainerStyles;
