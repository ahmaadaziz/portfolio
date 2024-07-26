import {
    IntroContainerStyles,
} from "@/lib/Sections/Landing/LandingStyles";
import {WrapperVariant} from "@/lib/utils/variants";
import IntroWrapper from "../../components/Wrappers/IntroWrapper/IntroWrapper";
import AboutMeWrapper from "@/lib/components/Wrappers/AboutMeWrapper/AboutMeWrapper";
import ToolsStyles from "./ToolsStyles";
import Heading2 from "@/lib/components/Texts/Heading2/Heading2";
import TechAndTools from "@/lib/components/TechAndTools/TechAndTools";

const Tools = () => {
    return (
        <AboutMeWrapper>
            <ToolsStyles>
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
                            <Heading2 sizeVariant={"large"} text="Tech and Tools" boldness={400}/>
                        </IntroWrapper>
                    </div>
                    <TechAndTools/>
                </IntroContainerStyles>
            </ToolsStyles>
        </AboutMeWrapper>
    );
};

export default Tools;
