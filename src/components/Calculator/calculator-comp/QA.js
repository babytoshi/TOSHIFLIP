import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          How many tokens do i need to receive rewards ?
        </AccordionSummary>
        <AccordionDetails>
          You need to buy a minimum of 200,000 BABYTOSHI tokens to get Bitcoin
          rewards.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
