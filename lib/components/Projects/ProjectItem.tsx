import { FC } from "react";
import { ArrowCircle, ButtonDiv, ContainerLink, MotionDiv } from "@/lib/components/Projects/ProjectItemStyles";
import Heading3 from "@/lib/components/Texts/Heading3/Heading3";
import Svg from "@/lib/components/SvgComp/Svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ProjectItemArrowVariants, ProjectItemTextVariants } from "@/lib/utils/variants";
import { Transition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/app/context/store";

interface IProps {
  animVariants: Variants;
  animTransition: Transition;
  projectName: string;
  url: string;
}

const ProjectItem: FC<IProps> = ({ animVariants, animTransition, projectName, url }) => {
  const { setCursorVariant } = useGlobalContext();

  return <ContainerLink
    href={url}
    variants={animVariants}
    transition={animTransition}
    onMouseEnter={() => setCursorVariant("project" + projectName)}
    onMouseLeave={() => setCursorVariant("default")}
  >
    <MotionDiv initial="rest" whileHover="hover" animate="rest">
      <ButtonDiv>
        <Heading3 text={projectName} boldness={450} animVariants={ProjectItemTextVariants} />
        <ArrowCircle>
          <motion.div variants={ProjectItemArrowVariants}>
            <Svg icon={faArrowRight} color={"var(--background)"} />
          </motion.div>
        </ArrowCircle>
      </ButtonDiv>
    </MotionDiv>
  </ContainerLink>;
};

export default ProjectItem;