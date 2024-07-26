import {FC} from "react";
import {
    TechAndToolsContainer
} from "@/lib/components/TechAndTools/TechAndToolsStyles";
import TTItem from "@/lib/components/TechAndTools/TTItem";

interface IProps {
}

const techAndToolsItems = [
    {name: "HTML"},
    {name: "CSS, SASS"},
    {name: "Bootstrap"},
    {name: "Tailwind"},
    {name: "JS, ES6"},
    {name: "Typescript"},
    {name: "React js"},
    {name: "Next js"},
    {name: "Astro"},
    {name: "React Query"},
    {name: "SWR"},
    {name: "Styled Components"},
    {name: "Git"},
    {name: "Framer Motion"},
    {name: "GSAP"},
    {name: "Figma"},
    {name: "Adobe XD"},
    {name: "Illustrator"},
]

const TechAndTools: FC<IProps> = (props) => {
    return <TechAndToolsContainer>
        {techAndToolsItems.map(({name}) => <TTItem name={name}/>)}
    </TechAndToolsContainer>
};

export default TechAndTools;
