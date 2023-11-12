"use client";

import { ReactNode } from "react";
import { StyleProps } from "@/lib/components/Wrappers/IntroWrapper/IntroWrapperStyles";
import { WrapperVariant } from "@/lib/utils/variants";
import IntroWrapperStyles from "@/lib/components/Wrappers/IntroWrapper/IntroWrapperStyles";

interface IProps extends StyleProps {
  children: ReactNode;
  inNav?: Boolean;
}

const IntroWrapper = ({ children, direction, width, mt, inNav }: IProps) => (
  <IntroWrapperStyles
    variants={inNav ? WrapperVariant : undefined}
    direction={direction}
    mt={mt}
    width={width}
    initial={inNav ? "hidden" : undefined}
    animate={inNav ? "visible" : undefined}
  >
    {children}
  </IntroWrapperStyles>
);

export default IntroWrapper;
