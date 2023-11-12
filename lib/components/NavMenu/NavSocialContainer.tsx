import { ReactNode } from "react";

import NavSocialContainerStyles from "@/lib/components/NavMenu/NavSocialContainerStyles";
import { WrapperVariant } from "@/lib/utils/variants";

interface IProps {
  children: ReactNode;
}

const NavSocialContainer = ({ children }: IProps) => {
  return (
    <NavSocialContainerStyles
      variants={WrapperVariant}
      initial="hidden"
      animate={"visible"}
    >
      {children}
    </NavSocialContainerStyles>
  );
};

export default NavSocialContainer;
