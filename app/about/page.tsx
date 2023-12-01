"use client";

import AboutMe from "@/lib/Sections/AboutMe/AboutMe";
import PageTransitionWrapper from "@/lib/components/Wrappers/PageTrasitionWrapper/PageTransitionWrapper";
import { AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <AnimatePresence mode="wait">
      <PageTransitionWrapper>
        <AboutMe/>
      </PageTransitionWrapper>
    </AnimatePresence>
  );
};

export default About;
