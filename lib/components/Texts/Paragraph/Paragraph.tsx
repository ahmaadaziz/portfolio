import ParagraphStyles, {
  ParagraphStyleProps,
} from "@/lib/components/Texts/Paragraph/ParagraphStyles";
import { SlideUpVariants } from "@/lib/utils/variants";
import { HeadingProps } from "../HeadingProps";
import { SlideUpEase } from "@/lib/utils/transitions";

interface IProps extends HeadingProps, ParagraphStyleProps {}

const Paragraph = ({ text, isSubheading, maxWidth, marginTop }: IProps) => {
  return (
    <ParagraphStyles
      isSubheading={isSubheading}
      maxWidth={maxWidth}
      variants={SlideUpVariants}
      transition={SlideUpEase}
      marginTop={marginTop}
    >
      {text}
    </ParagraphStyles>
  );
};

export default Paragraph;
