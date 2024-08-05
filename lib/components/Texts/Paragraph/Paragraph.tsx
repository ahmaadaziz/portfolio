import ParagraphStyles, {
    ParagraphStyleProps,
} from "@/lib/components/Texts/Paragraph/ParagraphStyles";
import {ParaEnterVariants} from "@/lib/utils/variants";
import {HeadingProps} from "../HeadingProps";
import {ParaEnter} from "@/lib/utils/transitions";

interface IProps extends HeadingProps, ParagraphStyleProps {
}

const Paragraph = ({text, isSubheading, maxWidth, marginTop}: IProps) => {
    return (
        <ParagraphStyles
            isSubheading={isSubheading}
            maxWidth={maxWidth}
            variants={ParaEnterVariants}
            transition={ParaEnter}
            marginTop={marginTop}
        >
            {text}
        </ParagraphStyles>
    );
};

export default Paragraph;
