import {
  IntroContainerStyles,
} from "@/lib/Sections/Landing/LandingStyles";
import { WrapperVariant } from "@/lib/utils/variants";
import IntroWrapper from "../../components/Wrappers/IntroWrapper/IntroWrapper";
import Heading1 from "../../components/Texts/Heading1/Heading1";
import Paragraph from "@/lib/components/Texts/Paragraph/Paragraph";
import AboutMeWrapper from "@/lib/components/Wrappers/AboutMeWrapper/AboutMeWrapper";
import AboutMeStyles from "./AboutMeStyles";

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <AboutMeStyles>
        <IntroContainerStyles
          variants={WrapperVariant}
          initial="hidden"
          animate={"visible"}
        >
          <div
            style={{
              marginTop: "clamp(3.5rem, 6vw, 6rem)",
              marginBottom: "clamp(4rem, 6vw, 6rem)",
              width: "fit-content",
            }}
          >
            <IntroWrapper>
              <Heading1 text="Ahmad Aziz" boldness={400} isName={true} />
            </IntroWrapper>
          </div>
          <IntroWrapper>
            <Paragraph
              text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
              isSubheading={true}
              maxWidth="100%"
            />
          </IntroWrapper>
          <div
            style={{
              marginTop: "2.5rem",
            }}
          >
            <IntroWrapper>
              <Paragraph
                maxWidth="100%"
                text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
              />
            </IntroWrapper>
          </div>
          <div
            style={{
              marginTop: "2.5rem",
            }}
          >
            <IntroWrapper>
              <Paragraph
                maxWidth="100%"
                text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
              />
            </IntroWrapper>
          </div>
        </IntroContainerStyles>
      </AboutMeStyles>
    </AboutMeWrapper>
  );
};

export default AboutMe;
