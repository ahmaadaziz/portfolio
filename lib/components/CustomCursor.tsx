"use client";

import { useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/app/context/store";
import { projectItems } from "@/lib/Sections/Projects/Projects";

const CustomCursor = () => {
  const { setCursorVariant, cursorVariant } = useGlobalContext();

  const cursorRef = useRef<HTMLDivElement>(null);

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const variants = useMemo(() => {
    let defVariants: { [k: string]: any } = {
      default: {
        height: 30,
        width: 30,
      },
      button: {
        height: 50,
        width: 50,
      },
      clicked: {
        height: 20,
        width: 20,
      },
      none: {
        height: 0,
        width: 0,
      },
    };

    projectItems.forEach((project) => {
      defVariants["project" + project.name] = {
        height: 150,
        width: 300,
        backgroundImage: `url(${project.imageUrl})`,
        backgroundSize: "cover",
        borderRadius: 0,
      };
    });

    return defVariants;
  }, [projectItems]);

  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;

    if (cursorVariant === "none") {
      cursorRef.current.classList.remove("addCursor");
    }

    if (cursorVariant.includes("project")) {
      cursorRef.current.classList.add("projectCursor");
    }
  }, [cursorVariant]);

  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;

    const move = (e: MouseEvent) => {
      if (cursorRef.current == null) return;

      const xOffset = cursorVariant.includes("project") ? 150 : 15;
      const yOffset = cursorVariant.includes("project") ? 75 : 15;

      cursorRef.current.style.transform =
        "translate3d(" +
        (e.clientX - xOffset) +
        "px, " +
        (e.clientY - yOffset) +
        "px, 0)";
    };

    window.addEventListener("mousemove", move);

    const mouseDown = () => {
      if (cursorRef.current == null) return;
      setCursorVariant("clicked");
    };

    window.addEventListener("mousedown", mouseDown);

    const mouseUp = () => {
      if (cursorRef.current == null) return;
      setCursorVariant("default");
    };

    window.addEventListener("mouseup", mouseUp);

    const mouseOut = (e: MouseEvent) => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.remove("addCursor");
    };

    window.addEventListener("mouseout", mouseOut);

    const mouseEnter = (e: MouseEvent) => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add("addCursor");
      cursorRef.current.classList.remove("projectCursor");
    };

    window.addEventListener("mouseover", mouseEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      window.removeEventListener("mouseout", mouseOut);
      window.removeEventListener("mouseover", mouseEnter);
    };
  }, [cursorVariant]);
  return (
    <motion.div
      className="invertedcursor"
      ref={cursorRef}
      transition={spring}
      variants={variants}
      animate={cursorVariant}
    ></motion.div>
  );
};

export default CustomCursor;
