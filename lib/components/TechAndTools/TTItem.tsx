import {FC} from "react";
import {TTItemContainerStyles, TTItemStyles} from "@/lib/components/TechAndTools/TechAndToolsStyles";

interface ItemProps {
    name: string
}

const TTItem: FC<ItemProps> = ({name}) => {
    return <TTItemContainerStyles>
        <TTItemStyles>
            {name}
        </TTItemStyles>
    </TTItemContainerStyles>
}

export default TTItem