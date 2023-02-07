import { useState } from "react";

import { Accordion } from "react-accessible-accordion";

import SectionTitle from "src/components/SectionTitle";
import CustomAccordionItem from "./CustomeAccordionItem";

import "./index.scss";

export default function FAQ() {
  const [activeUuid, setActiveUuid] = useState('1');

  return (
    <div className="faq">
      <div className="container">
        <div className="faq-content">
          <SectionTitle
            title="Frequently asked question"
            subtitle="Something is not clear? You need help? Check our FAQ section"
          />
          <Accordion
            preExpanded={["1"]}
            onChange={(event) => setActiveUuid(event[0])}
          >
            <CustomAccordionItem
              uuid={"1"}
              activeUuid={activeUuid}
              title={"What are my payment option?"}
            >
              <p>
                After creating your account you will have an oppurtunity to
                create your first project that will be associated withthe
                collaborators e-mail. An invitation will be sent automatically.
                Then, invited user will have to confirm his account by e-mail
                and finish userd onboarding.
              </p>
            </CustomAccordionItem>
            <CustomAccordionItem
              uuid={"2"}
              activeUuid={activeUuid}
              title={"How can I invite collaborator to platform?"}
            >
              <p>
                After creating your account you will have an oppurtunity to
                create your first project that will be associated withthe
                collaborators e-mail. An invitation will be sent automatically.
                Then, invited user will have to confirm his account by e-mail
                and finish userd onboarding.
              </p>
            </CustomAccordionItem>
            <CustomAccordionItem
              uuid={"3"}
              activeUuid={activeUuid}
              title={"Can I upgrade my plan?"}
            >
              <p>
                After creating your account you will have an oppurtunity to
                create your first project that will be associated withthe
                collaborators e-mail. An invitation will be sent automatically.
                Then, invited user will have to confirm his account by e-mail
                and finish userd onboarding.
              </p>
            </CustomAccordionItem>
            <CustomAccordionItem
              uuid={"4"}
              activeUuid={activeUuid}
              title={"Can I cancel my plan at anytime?"}
            >
              <p>
                After creating your account you will have an oppurtunity to
                create your first project that will be associated withthe
                collaborators e-mail. An invitation will be sent automatically.
                Then, invited user will have to confirm his account by e-mail
                and finish userd onboarding.
              </p>
            </CustomAccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
