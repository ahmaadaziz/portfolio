"use client";

import AboutMe from "@/lib/Sections/AboutMe/AboutMe";
import PageTransitionWrapper from "@/lib/components/Wrappers/PageTrasitionWrapper/PageTransitionWrapper";
import {AnimatePresence} from "framer-motion";
import Tools from "@/lib/Sections/Tools/Tools";
import IntroWrapper from "@/lib/components/Wrappers/IntroWrapper/IntroWrapper";
import MotionWrapper from "@/lib/components/Wrappers/MotionWrapper/MotionWrapper";
import Heading2 from "@/lib/components/Texts/Heading2/Heading2";
import BasicButton from "@/lib/components/Buttons/BasicButton/BasicButton";
import SocialIconButton from "@/lib/components/Buttons/SocialIconButton/SocialIconButton";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <AnimatePresence mode="wait">
            <PageTransitionWrapper>
                <AboutMe/>
                <Tools/>
                <div>
                    <IntroWrapper width="100%">
                        <MotionWrapper width="100%" pt="5rem" justify="space-between">
                            <Heading2 sizeVariant={"small"} text="Lets Work Together" boldness={400}/>
                            <BasicButton hideOnMobile text="Write an Email" href="/abot"/>
                        </MotionWrapper>
                    </IntroWrapper>
                    <IntroWrapper width="100%">
                        <MotionWrapper justify="flex-end" width="100%" pt="1rem">
                            <SocialIconButton icon={faGithub} color="black"/>
                            <SocialIconButton icon={faLinkedin} color="black"/>
                            <SocialIconButton icon={faInstagram} color="black"/>
                        </MotionWrapper>
                    </IntroWrapper>
                </div>
            </PageTransitionWrapper>
        </AnimatePresence>
    );
};

export default About;
