import { ReactNode } from "react";

import AboutMeWrapperStyles from "./AboutMeWrapperStyles";

interface IProps {
  children: ReactNode;
}

const AboutMeWrapper = ({ children }: IProps) => {
  return <AboutMeWrapperStyles>{children}</AboutMeWrapperStyles>;
};

export default AboutMeWrapper;
