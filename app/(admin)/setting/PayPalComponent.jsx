import { Input, Checkbox } from "@nextui-org/react";
import React from "react";
import { BsHeartFill, BsPlus } from "react-icons/bs";
import { CgKey } from "react-icons/cg";
import { HiIdentification } from "react-icons/hi";

const PayPalComponent = () => {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div>
      <div className="flex mt-5">Paypal Mode</div>
      <div className="flex gap-4 mt-10 mb-10">
        <Checkbox
          defaultSelected
          icon={<BsHeartFill size={50} />}
          color="danger"
          size="lg"
          isSelected={isSelected}
          onValueChange={setIsSelected}
        >
          {isSelected ? "Live" : "SandBox"}
        </Checkbox>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Client ID"
            placeholder="Enter ID Here"
            labelPlacement="outside"
            endContent={
              <HiIdentification className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />

          <Input
            type="key"
            label="Secret Key"
            placeholder="Enter Secret Key"
            labelPlacement="outside"
            endContent={<CgKey />}
          />
        </div>
      </div>
    </div>
  );
};

export default PayPalComponent;
