"use client";

import { useGlobalContext } from "@/app/context/store";
import {useRouter} from "next/navigation";

import { Circle, Container } from "@/lib/components/Buttons/TopButton/TopButtonStyles";

const TopButton = () => {
  const { setCursorVariant } = useGlobalContext();
  const { replace } = useRouter()

  const circleVariants = {
    default: {
      border: "1.6px solid black",
    },
    hovered: {
      border: "6px solid black",
      scale: 1.15,
    },
  };

  return (
    <Container>
      <Circle
        initial="default"
        variants={circleVariants}
        whileHover={"hovered"}
        onMouseEnter={() => setCursorVariant("none")}
        onMouseLeave={() => setCursorVariant("default")}
        onClick={() => replace("/")}
      ></Circle>
    </Container>
  );
};

export default TopButton;
