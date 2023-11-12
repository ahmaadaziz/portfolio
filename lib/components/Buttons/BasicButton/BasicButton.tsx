"use client";

import { useGlobalContext } from "@/app/context/store";
import BasicButtonStyles from "./BasicButtonStyles";
import { Props } from "./BasicButtonStyles";
import { SlideUpVariants } from "@/lib/utils/variants";
import { ButtonProps } from "../ButtonProps";

interface IProps extends Props, ButtonProps {}

const BasicButton = ({ secondary, text, href, marginTop, rounded }: IProps) => {
  const { setCursorVariant } = useGlobalContext();
  return (
    <BasicButtonStyles
      href={href}
      variants={SlideUpVariants}
      rounded={rounded}
      secondary={secondary}
      marginTop={marginTop}
      onMouseEnter={() => setCursorVariant("button")}
      onMouseLeave={() => setCursorVariant("default")}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "tween", stiffness: 400, damping: 17 }}
    >
      {text}
    </BasicButtonStyles>
  );
};

export default BasicButton;
