import ParagraphStyles from "@/lib/components/Texts/Paragraph/ParagraphStyles";
import { SlideUpVariants } from "@/lib/utils/variants";

interface IProps {
  text: string;
}

const Paragraph = ({ text }: IProps) => {
  return (
    <ParagraphStyles
      variants={SlideUpVariants}
      transition={{ type: "tween", stiffness: 400, damping: 17 }}
    >
      {text}
    </ParagraphStyles>
  );
};

export default Paragraph;
