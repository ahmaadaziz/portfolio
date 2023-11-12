"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Svg from "../../SvgComp/Svg";

import {
  ContentContainer,
  Wrapper,
  Container,
  Background,
  Text,
} from "@/lib/components/Buttons/SocialButton/SocialButtonStyles";
import { ButtonProps } from "../ButtonProps";
import { Props } from "@/lib/components/Buttons/SocialButton/SocialButtonStyles";
import {
  ScaleUpVariants,
  BackgroundRotateVariants,
} from "@/lib/utils/variants";

import { useGlobalContext } from "@/app/context/store";
import { IconStyleProps } from "../../SvgComp/SvgStyles";

interface AllProps extends ButtonProps, Props, IconStyleProps {
  icon: IconProp;
}

const SocialButton = ({
  text,
  icon,
  href,
  bgImage,
  origin,
  color,
}: AllProps) => {
  const { setCursorVariant } = useGlobalContext();

  const keepOnScreen = {
    default: {
      opacity: 1,
    },
    hover: {
      opacity: 1,
    },
  };

  return (
    <Wrapper
      origin={origin}
      variants={ScaleUpVariants}
      onMouseEnter={() => setCursorVariant("none")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <Container
        variants={keepOnScreen}
        initial="default"
        animate="default"
        whileHover={"hover"}
        href={href}
      >
        <Background variants={BackgroundRotateVariants(bgImage)} />
        <ContentContainer>
          <Svg cursor={true} color={color} icon={icon} />
          <Text whileHover={{ letterSpacing: "1.5px" }}>{text}</Text>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};

export default SocialButton;
