"use client";

import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { useGlobalContext } from "@/app/context/store";

import NavMenuStyles from "@/lib/components/NavMenu/NavMenuStyles";
import NavMenuContainer from "./NavMenuContainer";
import { NavSlideDown } from "@/lib/utils/transitions";

interface IProps {
  children: ReactNode;
}

const NavMenu = ({ children }: IProps) => {
  const { navbarOpen } = useGlobalContext();

  const variants = {
    visible: {
      y: "0vh",
    },
    hidden: {
      y: "-100vh",
    },
  };

  return (
    <AnimatePresence>
      {navbarOpen && (
        <NavMenuStyles
          key="navbox"
          initial="hidden"
          variants={variants}
          animate={navbarOpen ? "visible" : "hidden"}
          exit={"hidden"}
          transition={NavSlideDown}
        >
          <NavMenuContainer>{children}</NavMenuContainer>
        </NavMenuStyles>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
