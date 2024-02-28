"use client";

import PageHeader from "@/app/_lib/smalls/PageHeader";
import Layout from "./../layout";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

const getRandomFAQ = () => {
  const faqCount = Math.floor(Math.random() * 10) + 1; 
  const faqs = [];

  for (let i = 1; i <= faqCount; i++) {
    faqs.push(`Q: What is question ${i}? \nA: Answer to question ${i}.`);
  }

  return faqs;
};

const FAQ = () => {
  const [faqs, setFAQs] = useState([]);
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium text-danger",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2 text-danger",
  };

  useEffect(() => {
    const randomFAQs = getRandomFAQ();
    setFAQs(randomFAQs);
  }, []);

  return (
    <>
      <PageHeader
        headerTitle="FAQ"
        headerSubTitle="Get answers to commonly asked questions"
      />

      <div>
        <Accordion variant="splitted" itemClasses={itemClasses}>
          {faqs?.map((faq, index) => (
            <AccordionItem key={index} title={`FAQ Question ${index + 1}`}>
              {faq}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

FAQ.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default FAQ;
