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
  >
    {children}
  </MotionWrapperStyles>
);

export default MotionWrapper;
