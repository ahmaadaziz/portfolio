"use client";

import { useGlobalContext } from "@/app/context/store";
import BasicButtonStyles from "./BasicButtonStyles";
import { Props } from "./BasicButtonStyles";
import { SlideUpVariants } from "@/lib/utils/variants";
import { ButtonProps } from "../ButtonProps";
import { SlideUpEase } from "@/lib/utils/transitions";

interface IProps extends Props, ButtonProps {}

const BasicButton = ({ primary, text, href, marginTop, rounded, hideOnMobile }: IProps) => {
  const { setCursorVariant } = useGlobalContext();
  return (
    <BasicButtonStyles
      href={href}
      variants={SlideUpVariants}
      rounded={rounded}
      primary={primary}
      marginTop={marginTop}
      hideOnMobile={hideOnMobile}
      onMouseEnter={() => setCursorVariant("button")}
      onMouseLeave={() => setCursorVariant("default")}
      whileTap={{ scale: 0.9 }}
      transition={SlideUpEase}
    >
      {text}
    </BasicButtonStyles>
  );
};

export default BasicButton;
