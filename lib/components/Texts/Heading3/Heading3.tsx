import Heading3Styles from "./Heading3Styles";
import {HeadingProps, HeadingStyleProps} from "../HeadingProps";
import {IProps} from "./Heading3Styles";
import {Transition, Variants} from "framer-motion";

interface Props extends HeadingProps, HeadingStyleProps, IProps {
    animVariants?: Variants;
    animTransition?: Transition;
}

const Heading3 = ({text, boldness, animVariants, animTransition}: Props) => {

    return (
        <Heading3Styles
            boldness={boldness}
            variants={animVariants}
            transition={animTransition}
        >
            {text}
        </Heading3Styles>
    );
};

export default Heading3;
