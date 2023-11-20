import { faGithub } from "@fortawesome/free-brands-svg-icons";

import NavbarStyles from "./NavbarStyles";
import NavMenu from "../NavMenu/NavMenu";
import TopButton from "../Buttons/TopButton/TopButton";
import HamburgerButton from "../Buttons/MenuButton/HamburgerButton";
import IntroWrapper from "../Wrappers/IntroWrapper/IntroWrapper";
import Link from "../Link/Link";
import NavSocialContainer from "../NavMenu/NavSocialContainer";
import SocialButton from "../Buttons/SocialButton/SocialButton";

import Box1 from "../../../public/Box1.jpeg";

import { SlideDownVariants } from "@/lib/utils/variants";
import { SlideDownEase } from "@/lib/utils/transitions";

const Navbar = () => {
  return (
    <NavbarStyles
      variants={SlideDownVariants}
      initial="hidden"
      animate={"visible"}
      transition={SlideDownEase}
    >
      <TopButton />
      <HamburgerButton />
      <NavMenu>
        <IntroWrapper direction="column" width="75%" inNav mt>
          <Link link="/" text="Home" />
          <Link link="/projects" text="Projects" />
          <Link link="/about" text="About Me" />
        </IntroWrapper>
        <NavSocialContainer>
          <SocialButton
            origin="right bottom"
            text={"Github"}
            bgImage={Box1.src}
            href="/abot"
            icon={faGithub}
            color="white"
          />
          <SocialButton
            origin="left bottom"
            text={"Github"}
            bgImage={Box1.src}
            href="/abot"
            icon={faGithub}
            color="white"
          />
          <SocialButton
            origin="right top"
            text={"Github"}
            bgImage={Box1.src}
            href="/abot"
            icon={faGithub}
            color="white"
          />
          <SocialButton
            origin="left top"
            text={"Github"}
            bgImage={Box1.src}
            href="/abot"
            icon={faGithub}
            color="white"
          />
        </NavSocialContainer>
      </NavMenu>
    </NavbarStyles>
  );
};

export default Navbar;
