import { FC } from "react";
import { TTItemContainerStyles, TTItemStyles } from "@/lib/components/TechAndTools/TechAndToolsStyles";
import { ParaEnterVariants } from "@/lib/utils/variants";
import { ParaEnter } from "@/lib/utils/transitions";

interface ItemProps {
  name: string;
}

const TTItem: FC<ItemProps> = ({ name }) => {
  return <TTItemContainerStyles
    variants={ParaEnterVariants}
    transition={ParaEnter}
  >
    <TTItemStyles>
      {name}
    </TTItemStyles>
  </TTItemContainerStyles>;
};

export default TTItem;