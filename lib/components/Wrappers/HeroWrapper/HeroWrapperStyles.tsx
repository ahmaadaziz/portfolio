"use client";

import styled from "styled-components";

const HeroWrapperStyles = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 0rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 451px) {
    padding: 0rem 1rem;
  }
`;

export default HeroWrapperStyles;
