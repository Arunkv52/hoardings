import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Loyalty from "../assets/loyalty.webp";

const MyAccordition = () => {
  return (
    <>
      <div className="md:px-20 px-5 bg-black md:py-30 py-15 md:flex justify-between">
        <div className="acc-left md:w-1/2 w-full">
          <img src={Loyalty} alt="" />
        </div>
        <div className="acc-right text-white md:w-1/2 w-full py-10">
          <Accordion type="single" collapsible className="w-full"
      defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className={'md:text-2xl text-[18px]'}>
                What is brand consulting, and why is it important for business?
              </AccordionTrigger>
              <AccordionContent className={'md:text-[18px] text-[16px]'}>
                Brand consulting involves analyzing, developing, and managing a
                brand to enhance its reputation and market presence. It's
                crucial for businesses as a strong brand can differentiate you
                from competitors, build trust, and attract customers.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-2">
              <AccordionTrigger className={'md:text-2xl text-[18px]'}>
                What is brand consulting, and why is it important for business?
              </AccordionTrigger>
              <AccordionContent className={'md:text-[18px] text-[16px]'}>
                Brand consulting involves analyzing, developing, and managing a
                brand to enhance its reputation and market presence. It's
                crucial for businesses as a strong brand can differentiate you
                from competitors, build trust, and attract customers.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-3">
              <AccordionTrigger className={'md:text-2xl text-[18px]'}>
                What is brand consulting, and why is it important for business?
              </AccordionTrigger>
              <AccordionContent className={'md:text-[18px] text-[16px]'}>
                Brand consulting involves analyzing, developing, and managing a
                brand to enhance its reputation and market presence. It's
                crucial for businesses as a strong brand can differentiate you
                from competitors, build trust, and attract customers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default MyAccordition;
