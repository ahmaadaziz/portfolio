import { SlideUpVariants } from "@/lib/utils/variants";
import Heading2Styles from "./Heading2Styles";
import { IProps } from "./Heading2Styles";

interface Props extends IProps {
  text: string;
}

const Heading2 = ({ text, boldness }: Props) => {
  return (
    <Heading2Styles
      boldness={boldness}
      variants={SlideUpVariants}
      transition={{ type: "tween", stiffness: 400, damping: 17 }}
    >
      {text}
    </Heading2Styles>
  );
};

export default Heading2;
