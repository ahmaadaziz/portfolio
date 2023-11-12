"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const NavSocialContainerStyles = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  align-content: center;

  ${`@media (max-height: 820px) and (min-wdith: 1024px)`} {
    margin-top: 2rem;
  }

  ${`@media only screen and (max-width: 1025px)`} {
    grid-template-columns: repeat(4, clamp(72px, 10vw, 110px));
place-items: center;
place-content: flex-start center;
gap: clamp(0.75rem, 6vw, 6vw);
  }
`;

export default NavSocialContainerStyles;
