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
import Footer from "@/lib/components/Footer/Footer";

const Landing = () => {
  return (
    <HeroWrapper>
      <LandingContainerStyles>
        <IntroContainerStyles
          variants={WrapperVariant}
          initial="hidden"
          animate={"visible"}
          showBgAnim
        >
          <div style={{ marginTop: "2rem" }}>
            <IntroWrapper>
              <Heading1
                text="Hi, I'm"
                boldness={400}
                mainHeading={false}
                name={"Ahmad Aziz"}
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
              <Paragraph marginTop
                         text="I am a Creative Developer and Web Designer specializing in creating web apps with clean user interface and optimized user experience." />
            </IntroWrapper>
            <IntroWrapper smallGap>
              <BasicButton
                rounded
                text="About Me"
                href="/about"
                marginTop={true}
              />
              <BasicButton
                primary
                text="Résumé"
                marginTop={true}
              />
            </IntroWrapper>
            {/*<IntroWrapper>*/}
            {/*</IntroWrapper>*/}
          </div>
          {/*<div>*/}
          {/*  <IntroWrapper width="100%">*/}
          {/*    <MotionWrapper width="100%" pt="5rem" justify="space-between">*/}
          {/*      <Heading2 sizeVariant={"small"} text="Lets Work Together" boldness={400} />*/}
          {/*      <BasicButton hideOnMobile text="Write an Email" href="/abot" />*/}
          {/*    </MotionWrapper>*/}
          {/*  </IntroWrapper>*/}
          {/*  <IntroWrapper width="100%">*/}
          {/*    <MotionWrapper justify="flex-end" width="100%" pt="1rem">*/}
          {/*      <SocialIconButton icon={faGithub} color="black" />*/}
          {/*      <SocialIconButton icon={faLinkedin} color="black" />*/}
          {/*      <SocialIconButton icon={faInstagram} color="black" />*/}
          {/*    </MotionWrapper>*/}
          {/*  </IntroWrapper>*/}
          {/*</div>*/}
          <Footer animateOnView={false} />
        </IntroContainerStyles>
      </LandingContainerStyles>
    </HeroWrapper>
  );
};

export default Landing;
