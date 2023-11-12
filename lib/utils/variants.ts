export const WrapperVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const SlideUpVariants = {
  visible: { y: 0 },
  hidden: { y: 100 },
};

export const SlideUpFadeVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

export const ScaleUpVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};

export const SlideDownVariants = {
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
