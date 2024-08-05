import {FC} from "react";
import IntroWrapper from "@/lib/components/Wrappers/IntroWrapper/IntroWrapper";
import MotionWrapper from "@/lib/components/Wrappers/MotionWrapper/MotionWrapper";
import Heading2 from "@/lib/components/Texts/Heading2/Heading2";
import BasicButton from "@/lib/components/Buttons/BasicButton/BasicButton";
import SocialIconButton from "@/lib/components/Buttons/SocialIconButton/SocialIconButton";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

interface FooterProps {
    animateOnView: boolean;
    aboutMeFooter?: boolean
}

const Footer: FC<FooterProps> = ({animateOnView, aboutMeFooter}) => {
    return <div style={{
        width: aboutMeFooter ? "100%" : "auto",
        padding: aboutMeFooter ? "0 4rem" : "0",
        marginBottom: aboutMeFooter ? "6rem" : "0"
    }}>
        <IntroWrapper animateOnView={animateOnView} width="100%">
            <MotionWrapper width="100%" pt="5rem" justify="space-between">
                <Heading2 sizeVariant={"small"} text="Lets Work Together" boldness={400}/>
                <BasicButton primary hideOnMobile text="Write an Email" href="/abot"/>
            </MotionWrapper>
        </IntroWrapper>
        <IntroWrapper animateOnView={animateOnView} width="100%">
            <MotionWrapper justify="flex-end" width="100%" pt="1rem">
                <SocialIconButton icon={faGithub} color="var(--accent)"/>
                <SocialIconButton icon={faLinkedin} color="var(--accent)"/>
                <SocialIconButton icon={faInstagram} color="var(--accent)"/>
            </MotionWrapper>
        </IntroWrapper>
    </div>
}

export default Footer;