import { Textarea } from "@nextui-org/react";
import React from "react";

function ManualComponent() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex w-full md:flex-nowrap gap-4">
          <Textarea
            label="Description"
            variant="bordered"
            placeholder="Enter your Bank Details Here Separated By <br>"
            disableAnimation
            disableAutosize
            classNames={{
              base: "max-w-full",
              input: "resize-y min-h-[40px]",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ManualComponent;
