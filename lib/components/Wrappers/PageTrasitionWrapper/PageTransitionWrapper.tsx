import { FC } from "react";
import { SlideInStyles, SlideOutStyles } from "./PageTransitionWrapperStyles";
import { motion } from "framer-motion";
import { PageIntroVariant } from "@/lib/utils/variants";
import { PageSlide } from "@/lib/utils/transitions";

interface IProps {
  children: React.ReactNode;
}

const PageTransitionWrapper: FC<IProps> = ({ children }) => {
  return (
    <motion.div
      variants={PageIntroVariant}
      initial={"hidden"}
      animate={"visible"}
      style={{
        marginBottom: "4rem"
      }}
    >
      {children}
      <SlideInStyles
        key={"slide-in"}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={PageSlide}
      />
      <SlideOutStyles
        key={"slide-out"}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={PageSlide}
      />
    </motion.div>
  );
};

export default PageTransitionWrapper;
