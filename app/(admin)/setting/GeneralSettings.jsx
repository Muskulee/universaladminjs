import { Button, Input } from "@nextui-org/react";
import { BiMailSend } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";

const GeneralSettings = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        {/* Website Name Input */}
        <Input
          isClearable
          type="text"
          label="Website Name"
          placeholder="e.g Admin Template"
          labelPlacement="outside"
          startContent={
            <TbWorldWww className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          onClear={() => console.log("input cleared")}
        />
        {/* Website URL Input */}
        <Input
          isClearable
          onClear={() => console.log("input cleared")}
          type="text"
          label="Website URL"
          placeholder="https://www.example.com"
          labelPlacement="outside"
          startContent={
            <TbWorldWww className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        {/* Email */}
        <Input
          isClearable
          onClear={() => console.log("input cleared")}
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          startContent={
            <BiMailSend className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />

        {/* Currency * Choose  a symbol too */}
        <Input
          label="Currency and Symbol"
          placeholder="e.g USD"
          labelPlacement="outside"
          description="Note: This value will be automatically assigned whenever a new store is created."
          // startContent={
          //   <div className="pointer-events-none flex items-center">
          //     <span className="text-default-400 text-small">$</span>
          //   </div>
          // }
          endContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>USD</option>
                <option>ARS</option>
                <option>EUR</option>
              </select>
            </div>
          }
          type="number"
        />
      </div>
      <Button color="danger">Update</Button>
    </div>
  );
};

export default GeneralSettings;
