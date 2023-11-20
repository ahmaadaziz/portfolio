"use client";

import { useGlobalContext } from "@/app/context/store";
import { SlideUpFadeVariants } from "../../utils/variants";
import LinkStyles from "./LinkStyles";
import { SlideUpEase } from "@/lib/utils/transitions";

interface Props {
  text: string;
  link: string;
}

const Link = ({ text, link }: Props) => {
  const { setCursorVariant } = useGlobalContext();
  return (
    <LinkStyles
      href={link}
      variants={SlideUpFadeVariants}
      onMouseEnter={() => setCursorVariant("button")}
      onMouseLeave={() => setCursorVariant("default")}
      whileHover={{ letterSpacing: "1.5px" }}
      transition={SlideUpEase}
    >
      {text}
    </LinkStyles>
  );
};

export default Link;
