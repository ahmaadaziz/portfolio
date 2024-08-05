"use client";

import AboutMe from "@/lib/Sections/AboutMe/AboutMe";
import PageTransitionWrapper from "@/lib/components/Wrappers/PageTrasitionWrapper/PageTransitionWrapper";
import { AnimatePresence } from "framer-motion";
import Tools from "@/lib/Sections/Tools/Tools";
import Footer from "@/lib/components/Footer/Footer";
import AboutMeWrapper from "@/lib/components/Wrappers/AboutMeWrapper/AboutMeWrapper";

const About = () => {
  return (
    <AnimatePresence mode="wait">
      <PageTransitionWrapper>
        <AboutMe />
        <Tools />
        <AboutMeWrapper>
          <Footer aboutMeFooter animateOnView={true} />
        </AboutMeWrapper>
      </PageTransitionWrapper>
    </AnimatePresence>
  );
};

export default About;
