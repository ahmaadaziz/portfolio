import Heading1Styles from "@/lib/components/Texts/Heading1/Heading1Styles";
import { IProps } from "@/lib/components/Texts/Heading1/Heading1Styles";
import { SlideUpVariants } from "@/lib/utils/variants";

interface Props extends IProps {
  text: string;
}

const Heading1 = ({ text, mainHeading, boldness }: Props) => {
  return (
    <Heading1Styles
      mainHeading={mainHeading}
      boldness={boldness}
      variants={SlideUpVariants}
      transition={{ type: "tween", stiffness: 400, damping: 17 }}
    >
      {text}
    </Heading1Styles>
  );
};

export default Heading1;
