import {
  LandingContainerStyles,
  IntroContainerStyles,
} from "@/lib/Sections/Landing/LandingStyles";
import { WrapperVariant } from "@/lib/utils/variants";
import HeroWrapper from "../../components/Wrappers/HeroWrapper/HeroWrapper";
import IntroWrapper from "../../components/Wrappers/IntroWrapper/IntroWrapper";
import BasicButton from "../../components/Buttons/BasicButton/BasicButton";
import Heading1 from "../../components/Texts/Heading1/Heading1";
import Paragraph from "../../components/Texts/Paragraph/Paragraph";
import Heading2 from "@/lib/components/Texts/Heading2/Heading2";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import SocialIconButton from "@/lib/components/Buttons/SocialIconButton/SocialIconButton";
import MotionWrapper from "@/lib/components/Wrappers/MotionWrapper/MotionWrapper";

const Landing = () => {
  return (
    <HeroWrapper>
      <LandingContainerStyles>
        <IntroContainerStyles
          variants={WrapperVariant}
          initial="hidden"
          animate={"visible"}
        >
          <IntroWrapper>
            <Heading1
              text="Hi, I'm Ahmad Aziz"
              boldness={400}
              mainHeading={false}
            />
          </IntroWrapper>
          <IntroWrapper>
            <Heading1
              text="I turn Ideas into Apps"
              boldness={500}
              mainHeading={true}
            />
          </IntroWrapper>
          <IntroWrapper>
            <Paragraph text="I am a Creative Developer and Web Designer specializing in creating web apps with clean user interface and optimized user experience." />
          </IntroWrapper>
          <IntroWrapper>
            <BasicButton
              rounded
              text="About Me"
              href="/about"
              marginTop={true}
            />
          </IntroWrapper>
          <IntroWrapper width="100%">
            <MotionWrapper width="100%" pt="5rem" justify="space-between">
              <Heading2 text="Lets Work Together" boldness={400} />
              <BasicButton text="Write an Email" href="/abot" />
            </MotionWrapper>
          </IntroWrapper>
          <IntroWrapper width="100%">
            <MotionWrapper justify="flex-end" width="100%" pt="1rem">
              <SocialIconButton icon={faGithub} color="black" />
              <SocialIconButton icon={faLinkedin} color="black" />
              <SocialIconButton icon={faInstagram} color="black" />
            </MotionWrapper>
          </IntroWrapper>
        </IntroContainerStyles>
      </LandingContainerStyles>
    </HeroWrapper>
  );
};

export default Landing;
