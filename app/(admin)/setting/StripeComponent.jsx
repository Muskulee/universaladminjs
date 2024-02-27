import { Input } from "@nextui-org/react";
import React from "react";
import { CgKey } from "react-icons/cg";

const StripeComponent = () => {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div>
      {/* <div className="flex mt-5">Paypal Mode</div> */}

      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Stripe Key"
            placeholder="Enter Stripe Key Here"
            labelPlacement="outside"
            endContent={
              <CgKey className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />

          <Input
            type="key"
            label="Stripe Secret Key"
            placeholder="Enter Stripe Secret Key"
            labelPlacement="outside"
            endContent={<CgKey />}
          />
        </div>
      </div>
    </div>
  );
};

export default StripeComponent;
