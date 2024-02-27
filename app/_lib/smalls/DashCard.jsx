import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Chip,
} from "@nextui-org/react";
import React from "react";

const DashCard = ({
  cardIcon,
  cardName,
  cardValue,
  buttomIcon,
  footerName,
}) => (
  <Card className="col-span-12 sm:col-span-4 h-[150px] ">
    <CardHeader className="z-10 top-1 flex-col !items-start">
      <Chip
        startContent={cardIcon}
        variant="bordered"
        color="secondary"
        size="md"
      >
        {cardName}
      </Chip>
    </CardHeader>
    {/* <Divider /> */}
    <CardBody>
      <h2 className="font-extrabold text-black text-lg font-large justify-center">
        {cardValue}
      </h2>
    </CardBody>
    <Divider />
    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
      <div>
        <p className="text-black text-tiny">{footerName}</p>
        {/* <p className="text-black text-tiny">Get notified.</p> */}
      </div>
      <Button className="text-tiny" color="danger" radius="full" size="sm">
        {buttomIcon}
      </Button>
    </CardFooter>
  </Card>
);

export default DashCard;
