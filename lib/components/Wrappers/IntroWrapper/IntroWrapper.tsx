"use client";

import { ReactNode } from "react";
import { StyleProps } from "@/lib/components/Wrappers/IntroWrapper/IntroWrapperStyles";
import { WrapperVariant } from "@/lib/utils/variants";
import IntroWrapperStyles from "@/lib/components/Wrappers/IntroWrapper/IntroWrapperStyles";

interface IProps extends StyleProps {
  children: ReactNode;
  inNav?: boolean;
  animateOnView?: boolean;
}

const IntroWrapper = ({ children, direction, width, mt, inNav, animateOnView, smallGap }: IProps) => (
  <IntroWrapperStyles
    variants={inNav ? WrapperVariant : undefined}
    direction={direction}
    mt={mt}
    width={width}
    initial={inNav || animateOnView ? "hidden" : undefined}
    animate={inNav ? "visible" : undefined}
    whileInView={animateOnView ? "visible" : undefined}
    viewport={animateOnView ? { once: true } : undefined}
    overflowHidden={!animateOnView}
    smallGap={smallGap}
  >
    {children}
  </IntroWrapperStyles>
);

export default IntroWrapper;
