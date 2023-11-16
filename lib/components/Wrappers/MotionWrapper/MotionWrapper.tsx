"use client";

import { SlideUpVariants } from "@/lib/utils/variants";
import { FC } from "react";
import MotionWrapperStyles from "./MotionWrapperStyles";
import { StyleProps } from "./MotionWrapperStyles";

interface IProps extends StyleProps {
  children: React.ReactNode;
}

const MotionWrapper: FC<IProps> = ({ children, justify, pt, width }) => (
  <MotionWrapperStyles
    justify={justify}
    pt={pt}
    width={width}
    variants={SlideUpVariants}
    transition={{ type: "tween", stiffness: 400, damping: 17, ease: "easeOut", duration: 0.5 }}
  >
    {children}
  </MotionWrapperStyles>
);

export default MotionWrapper;
