"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import Layout from "./../layout";
import { TbPackage } from "react-icons/tb";
import { BiCheckCircle } from "react-icons/bi";
import PageHeader from "@/app/_lib/smalls/PageHeader";


const Pricing = () => {
  const plans = [
    {
      id: 1,
      planTitle: "First Tier",
      subtitle: "Starter Plan",
      recommended: false,
      benefits: [
        "Plan Benefit 1",
        "Plan Benefit 2",
        "Plan Benefit 3",
        "Plan Benefit 4",
      ],
    },
    {
      id: 2,
      planTitle: "Second Tier",
      subtitle: "Best Plan",
      recommended: true,
      benefits: [
        "Plan Benefit 1",
        "Plan Benefit 2",
        "Plan Benefit 3",
        "Plan Benefit 4",
        "Bumper",
      ],
    },
    {
      id: 3,
      planTitle: "Third Tier",
      subtitle: "Greatest Plan",
      recommended: false,
      benefits: [
        "Mega",
        "Plan Benefit 2",
        "Plan Benefit 3",
        "Plan Benefit 4",
        "Plan Benefit 4",
      ],
    },
  ];

  return (
    <>
      <PageHeader
        headerTitle="Pricing"
        headerSubTitle="Choose from our flexible plan"
      />
      <div className="gap-2 grid grid-cols-3 grid-rows-2 mt-10">
        {plans.map((plan, id) => {
          return (
            <Card
              className="max-w-[500px] items-center justify-center"
              key={id}
            >
              <CardHeader className="flex gap-3 items-center justify-center">
                <TbPackage size={40} />
                <div className="flex flex-col">
                  <p className="text-md">{plan.planTitle}</p>
                  <p className="text-small text-default-500">{plan.subtitle}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody className="items-center justify-center">
                <div className="items-center justify-center">
                  <Listbox
                    aria-label="Actions"
                    className="flex items-center justify-center text-2xl"
                  >
                    {plan.benefits.map((benefit, index) => (
                      <ListboxItem
                        key={benefit}
                        startContent={<BiCheckCircle />}
                        className="px-3 data-[hover=true]:bg-default-100/80 items-center justify-center"
                      >
                        {benefit}
                      </ListboxItem>
                    ))}
                  </Listbox>
                </div>
              </CardBody>
              <Divider />
              <CardFooter className="items-center justify-center">
                <Button fullWidth variant="solid" color="danger" size="lg">
                  Choose
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};

Pricing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Pricing;
