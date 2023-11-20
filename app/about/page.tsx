"use client";

import PageTransitionWrapper from "@/lib/components/Wrappers/PageTrasitionWrapper/PageTransitionWrapper";
import { AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <AnimatePresence mode="wait">
      <PageTransitionWrapper>
        <div>About</div>
      </PageTransitionWrapper>
    </AnimatePresence>
  );
};

export default About;
