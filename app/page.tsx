"use client";

import Landing from "@/lib/Sections/Landing/Landing";
import PageTransitionWrapper from "@/lib/components/Wrappers/PageTrasitionWrapper/PageTransitionWrapper";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <div>
      <AnimatePresence mode="wait">
        <PageTransitionWrapper>
          <Landing />
        </PageTransitionWrapper>
      </AnimatePresence>
    </div>
  );
}
