import Heading1Styles from "@/lib/components/Texts/Heading1/Heading1Styles";
import { IProps as Heading1StyleProps } from "@/lib/components/Texts/Heading1/Heading1Styles";
import { SlideUpVariants } from "@/lib/utils/variants";
import { HeadingProps, HeadingStyleProps } from "../HeadingProps";
import { SlideUpEase } from "@/lib/utils/transitions";
import styled from "styled-components";

const NameTag = styled.span`
    color: var(--primary);
    font-weight: 550;
`;

interface Props extends HeadingProps, HeadingStyleProps, Heading1StyleProps {
  name?: string;
}

const Heading1 = ({ text, mainHeading, boldness, isName, name }: Props) => {
  return (
    <Heading1Styles
      mainHeading={mainHeading}
      boldness={boldness}
      variants={SlideUpVariants}
      transition={SlideUpEase}
      isName={isName}
    >
      {text}{name ? <NameTag> {name}</NameTag> : ""}
    </Heading1Styles>
  );
};

export default Heading1;
