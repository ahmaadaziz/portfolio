"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Svg from "../../SvgComp/Svg";

import { useGlobalContext } from "@/app/context/store";
import { IconStyleProps } from "../../SvgComp/SvgStyles";
import SocialIconButtonStyles from "./SocialIconButtonStyles";

interface AllProps extends IconStyleProps {
  icon: IconProp;
}

const SocialIconButton = ({ color, icon, cursor }: AllProps) => {
  const { setCursorVariant } = useGlobalContext();

  return (
    <SocialIconButtonStyles
      onMouseEnter={() => setCursorVariant("button")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <Svg cursor={false} color={color} icon={icon} />
    </SocialIconButtonStyles>
  );
};

export default SocialIconButton;
