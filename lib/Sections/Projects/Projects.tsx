import {
  IntroContainerStyles,
} from "@/lib/Sections/Landing/LandingStyles";
import { ParaEnterVariants, WrapperVariant } from "@/lib/utils/variants";
import IntroWrapper from "../../components/Wrappers/IntroWrapper/IntroWrapper";
import AboutMeWrapper from "@/lib/components/Wrappers/AboutMeWrapper/AboutMeWrapper";
import ProjectStyles from "./ProjectStyles";
import Heading2 from "@/lib/components/Texts/Heading2/Heading2";
import { ParaEnter } from "@/lib/utils/transitions";
import ProjectItem from "@/lib/components/Projects/ProjectItem";

export const projectItems = [
  { name: "HTML", url: "", imageUrl: "http://www.javascriptkit.com/dhtmltutors/cursor-hand.gif" },
  { name: "HTML 1", url: "", imageUrl: "http://www.javascriptkit.com/dhtmltutors/cursor-hand.gif" },
  { name: "HTML 2", url: "", imageUrl: "http://www.javascriptkit.com/dhtmltutors/cursor-hand.gif" },
  { name: "HTML 3", url: "", imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png" },
];

const Projects = () => {
  return (
    <AboutMeWrapper>
      <ProjectStyles>
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
            <IntroWrapper animateOnView>
              <Heading2 animTransition={ParaEnter} animVariants={ParaEnterVariants} sizeVariant={"large"}
                        text="Projects" boldness={400} />
            </IntroWrapper>
          </div>
          <div>
            {projectItems.map(({ name, url }) => <IntroWrapper animateOnView width={"100%"}>
              <ProjectItem key={name} url={url} projectName={name} animTransition={ParaEnter}
                           animVariants={ParaEnterVariants} />
            </IntroWrapper>)}
          </div>
        </IntroContainerStyles>
      </ProjectStyles>
    </AboutMeWrapper>
  )
    ;
};

export default Projects;
