import { Accordion, AccordionItem, Avatar, Switch } from "@nextui-org/react";
import {  BiDownArrow, BiUpArrow } from "react-icons/bi";
import {  BsPaypal } from "react-icons/bs";
import { PiStripeLogo } from "react-icons/pi";
import PayPalComponent from "./PayPalComponent";
import StripeComponent from "./StripeComponent";
import { GrManual } from "react-icons/gr";
import ManualComponent from "./ManualComponent";

const PaymentSettings = () => {
  const PaymentMethods = [
    {
      title: "Paypal",
      icon: <BsPaypal size={50} />,
      component: <PayPalComponent />,
    },
    {
      title: "Stripe",
      icon: <PiStripeLogo size={50} />,
      component: <StripeComponent />,
    },
    {
      title: "Bank Transfer",
      icon: <GrManual size={50} />,
      component: <ManualComponent />,
    },
  ];

  return (
    <Accordion selectionMode="multiple">
      {PaymentMethods.map((method, index) => {
        return (
          <AccordionItem
            indicator={({ isOpen }) =>
              isOpen ? <BiUpArrow /> : <BiDownArrow />
            }
            key={index}
            aria-label={method.title}
            startContent={<Avatar isBordered radius="sm" icon={method.icon} />}
            subtitle={
              <p className="flex">
                <Switch aria-label={method.title} color="danger" />
              </p>
            }
            title={method.title}
          >
            {method.component}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default PaymentSettings;
