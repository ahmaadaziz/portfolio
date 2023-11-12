import { IconProp } from "@fortawesome/fontawesome-svg-core";

import SvgStyles from "./SvgStyles";
import { IconStyleProps } from "./SvgStyles";

interface IProps extends IconStyleProps {
  icon: IconProp;
}

const Svg = ({icon, color, cursor}: IProps) => {
  return <SvgStyles cursor={cursor} color={color} icon={icon} />;
};

export default Svg;
