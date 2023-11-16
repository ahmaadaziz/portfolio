import Heading1Styles from "@/lib/components/Texts/Heading1/Heading1Styles";
import { IProps as Heading1StyleProps } from "@/lib/components/Texts/Heading1/Heading1Styles";
import { SlideUpVariants } from "@/lib/utils/variants";
import {HeadingProps, HeadingStyleProps} from "../HeadingProps";

interface Props extends HeadingProps, HeadingStyleProps, Heading1StyleProps {}

const Heading1 = ({ text, mainHeading, boldness }: Props) => {
  return (
    <Heading1Styles
      mainHeading={mainHeading}
      boldness={boldness}
      variants={SlideUpVariants}
      // transition={{ type: "tween", stiffness: 400, damping: 17 }}
      transition={{
        type: "tween",
        stiffness: 400,
        damping: 17,
        ease: "easeOut",
        duration: 0.5,
      }}
    >
      {text}
    </Heading1Styles>
  );
};

export default Heading1;
