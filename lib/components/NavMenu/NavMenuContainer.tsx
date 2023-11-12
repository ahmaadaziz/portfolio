import { ReactNode } from "react";

import NavMenuContainerStyles from "@/lib/components/NavMenu/NavMenuContainerStyles";

interface IProps {
  children: ReactNode;
}

const NavMenuContainer = ({ children }: IProps) => {
  return <NavMenuContainerStyles>{children}</NavMenuContainerStyles>;
};

export default NavMenuContainer;
