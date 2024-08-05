import { Transition } from "framer-motion";

export const SlideUpEase: Transition = {
  type: "tween",
  stiffness: 400,
  damping: 17,
  ease: "easeOut",
  duration: 0.5,
};

export const SlideDownEase: Transition = {
  type: "tween",
  stiffness: 400,
  damping: 17,
  ease: "easeOut",
  duration: 0.5,
  delay: 1.3,
};

export const NavSlideDown: Transition = {
  type: "tween",
  stiffness: 400,
  damping: 20,
  ease: "easeInOut",
  duration: 0.75,
  delay: 0.1,
};

export const PageSlide: Transition = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
  delay: 0.5,
};

export const ParaEnter: Transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.55,
};