import { Button, Input } from "@nextui-org/react";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import { GiHotSurface, GiPortal } from "react-icons/gi";
import { LuMailSearch } from "react-icons/lu";
import { MdNoEncryption } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const EmailSettings = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          {/* Mail Driver Input */}
          <Input
            isClearable
            type="text"
            label="Mail Driver"
            placeholder="e.g SMTP"
            labelPlacement="outside"
            startContent={
              <LuMailSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            onClear={() => console.log("input cleared")}
          />
          {/* Mail Host Input */}
          <Input
            isClearable
            onClear={() => console.log("input cleared")}
            type="text"
            label="Mail Host"
            placeholder="mailhost.example.com"
            labelPlacement="outside"
            startContent={
              <GiHotSurface className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          {/* Mail Port Input */}
          <Input
            isClearable
            onClear={() => console.log("input cleared")}
            type="number"
            label="Mail Port"
            placeholder="465"
            labelPlacement="outside"
            startContent={
              <GiPortal className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          {/* Username Input */}
          <Input
            label="Mail Username"
            placeholder="admin"
            labelPlacement="outside"
            type="text"
          />
          {/* Mail Password Input */}

          <Input
            type="password"
            label="Mail Password"
            placeholder="admin"
            labelPlacement="outside"
          />
          {/* Mail Encryption Input */}

          <Input
            isClearable
            type="text"
            label="Mail Encyption"
            placeholder="TLS"
            labelPlacement="outside"
            startContent={
              <MdNoEncryption className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            onClear={() => console.log("input cleared")}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          {/* Mail From Input */}
          <Input
            label="Mail From Address"
            placeholder="admin@email.com"
            labelPlacement="outside"
            type="email"
          />
          {/* Mail From Name Input */}

          <Input
            type="text"
            label="Mail From Name"
            placeholder="admin"
            labelPlacement="outside"
          />
          {/* Mail Encryption Input */}
        </div>
        <Button color="danger">Update</Button>
        <Button color="secondary">Send Test</Button>
      </div>
    </div>
  );
};

export default EmailSettings;
