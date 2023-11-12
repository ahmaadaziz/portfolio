import { ReactNode } from "react";

import GlobalWrapperStyles from "@/lib/components/Wrappers/GlobalWrapper/GlobalWrapperStyles";

interface IProps {
  children: ReactNode;
}

const GlobalWrapper = ({ children }: IProps) => {
  return <GlobalWrapperStyles>{children}</GlobalWrapperStyles>;
};

export default GlobalWrapper;
