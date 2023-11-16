import { Transition } from "framer-motion";

export const SlideUpEase: Transition = {
  type: "tween",
  stiffness: 400,
  damping: 17,
  ease: "easeOut",
  duration: 0.5,
};