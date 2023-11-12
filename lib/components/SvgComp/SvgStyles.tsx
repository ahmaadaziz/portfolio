import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export interface IconStyleProps {
  color: string
  cursor?: boolean
}

const SvgStyles = styled(FontAwesomeIcon)<IconStyleProps>`
  color: ${({ color }) => color};
  font-size: 2rem;
  cursor: ${({ cursor }) => cursor ? "pointer" : "none"} !important;
  
  & > path {
    cursor: ${({ cursor }) => cursor ? "pointer" : "none"} !important;
  }

  @media only screen and (max-width: 1025px) {
    width: clamp(1.5rem, 4vw, 3rem);
    height: clamp(1.5rem, 4vw, 3rem);
  }
`;

export default SvgStyles;
