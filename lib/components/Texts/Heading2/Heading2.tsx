import {SlideUpVariants} from "@/lib/utils/variants";
import Heading2Styles from "./Heading2Styles";
import {HeadingProps, HeadingStyleProps} from "../HeadingProps";
import {IProps} from "./Heading2Styles";
import {SlideUpEase} from "@/lib/utils/transitions";
import {Transition, Variants} from "framer-motion";

interface Props extends HeadingProps, HeadingStyleProps, IProps {
    animVariants?: Variants;
    animTransition?: Transition;
}

const Heading2 = ({text, boldness, sizeVariant, animVariants, animTransition}: Props) => {

    return (
        <Heading2Styles
            boldness={boldness}
            variants={animVariants ?? SlideUpVariants}
            transition={animTransition ?? SlideUpEase}
            sizeVariant={sizeVariant}
        >
            {text}
        </Heading2Styles>
    );
};

export default Heading2;
