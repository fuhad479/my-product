import { useState } from "react";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { ReactComponent as PlusIcon } from "src/assets/plus.svg";
import { ReactComponent as MinusIcon } from "src/assets/minus.svg";

export default function CustomAccordionItem({
  uuid,
  activeUuid,
  title,
  children,
}) {
  const [currentUuid, setCurrentUuid] = useState("1");

  console.log(currentUuid, activeUuid);

  return (
    <AccordionItem uuid={uuid}>
      <AccordionItemHeading
        aria-level={uuid}
        onClick={(event) => setCurrentUuid(event.currentTarget.ariaLevel)}
      >
        <AccordionItemButton>
          {activeUuid === currentUuid ? <MinusIcon /> : <PlusIcon />}
          <p>{title}</p>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>{children}</AccordionItemPanel>
    </AccordionItem>
  );
}
