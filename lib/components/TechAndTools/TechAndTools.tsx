import { FC } from "react";
import {
  TechAndToolsContainer,
} from "@/lib/components/TechAndTools/TechAndToolsStyles";
import TTItem from "@/lib/components/TechAndTools/TTItem";
import IntroWrapper from "@/lib/components/Wrappers/IntroWrapper/IntroWrapper";

interface IProps {
}

const techAndToolsItems = [
  { name: "HTML" },
  { name: "CSS, SASS" },
  { name: "Bootstrap" },
  { name: "Tailwind" },
  { name: "JS, ES6" },
  { name: "Typescript" },
  { name: "React js" },
  { name: "Next js" },
  { name: "Astro" },
  { name: "React Query" },
  { name: "SWR" },
  { name: "Styled Components" },
  { name: "Git" },
  { name: "Framer Motion" },
  { name: "GSAP" },
  { name: "Figma" },
  { name: "Adobe XD" },
  { name: "Illustrator" },
];

const TechAndTools: FC<IProps> = () => {
  return <TechAndToolsContainer>
    {techAndToolsItems.map(({ name }) => <IntroWrapper animateOnView>
      <TTItem key={name} name={name} />
    </IntroWrapper>)}
  </TechAndToolsContainer>;
};

export default TechAndTools;
