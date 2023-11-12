"use client";

import { useGlobalContext } from "@/app/context/store";

import {
  LineOne,
  LineTwo,
  LineContainer,
  Container,
} from "@/lib/components/Buttons/MenuButton/HamburgerButtonStyles";

const HamburgerButton = () => {
  const { setCursorVariant, setNavbarOpen, navbarOpen } = useGlobalContext();

  const line1Variants = {
    default: {
      top: "30%",
      height: 2,
      rotate: 0,
    },
    hovered: {
      top: "30%",
      height: 4,
      rotate: 0,
    },
    open: {
      top: "45%",
      height: 4,
      rotate: -45,
    },
  };

  const line2Variants = {
    default: {
      bottom: "30%",
      height: 2,
      width: 40,
      rotate: 0,
      x: 0,
    },
    hovered: {
      bottom: "30%",
      height: 4,
      width: 25,
      rotate: 0,
      x: 15,
    },
    open: {
      bottom: "44%",
      height: 4,
      rotate: 45,
    },
  };

  return (
    <Container>
      <LineContainer
        initial="default"
        whileHover={navbarOpen ? "open" : "hovered"}
        animate={navbarOpen ? "open" : "default"}
        onMouseEnter={() => setCursorVariant("none")}
        onMouseLeave={() => setCursorVariant("default")}
        onClick={() => setNavbarOpen((current) => !current)}
      >
        <LineOne variants={line1Variants} />
        <LineTwo variants={line2Variants} />
      </LineContainer>
    </Container>
  );
};

export default HamburgerButton;
