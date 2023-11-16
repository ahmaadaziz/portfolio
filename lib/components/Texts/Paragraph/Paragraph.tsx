import ParagraphStyles from "@/lib/components/Texts/Paragraph/ParagraphStyles";
import { SlideUpVariants } from "@/lib/utils/variants";
import { HeadingProps } from "../HeadingProps";
import { SlideUpEase } from "@/lib/utils/transitions";

interface IProps extends HeadingProps {}

const Paragraph = ({ text }: IProps) => {
  return (
    <ParagraphStyles variants={SlideUpVariants} transition={SlideUpEase}>
      {text}
    </ParagraphStyles>
  );
};

export default Paragraph;
