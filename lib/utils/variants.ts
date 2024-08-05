import { Variants } from "framer-motion";

export const PageIntroVariant: Variants = {
  visible: {
    opacity: 1,
    height: "100%",
    transition: {
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  hidden: {
    opacity: 1,
    height: "100%",
    transition: {
      when: "afterChildren",
    },
  },
};

export const WrapperVariant: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
      delayChildren: 1.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const SlideUpVariants: Variants = {
  visible: { y: 0 },
  hidden: { y: 150 },
};

export const SlideUpFadeVariants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

export const ParaEnterVariants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

export const ScaleUpVariants: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};

export const SlideDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const BackgroundRotateVariants = (path: string | undefined) => {
  return {
    default: {
      background: `url(${path}) center center / cover no-repeat`,
      scale: 1,
      rotation: 0,
      transition: {
        duration: 3.25,
        type: "tween",
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 3,
      rotation: 45,
      transition: {
        duration: 3.25,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };
};
