import { ReactNode } from "react";
import HeroWrapperStyles from "@/lib/components/Wrappers/HeroWrapper/HeroWrapperStyles";

interface IProps {
  children: ReactNode;
}

const HeroWrapper = ({children}: IProps) => (
  <HeroWrapperStyles>
    {children}
  </HeroWrapperStyles>
);

export default HeroWrapper;
