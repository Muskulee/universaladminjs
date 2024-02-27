import { Switch, cn } from "@nextui-org/react";
import React from "react";

function BrandSettings() {
  const color = "danger";
  const base =
    "inline-flex flex-row-reverse w-full max-w-full bg-content2 hover:bg-content3 items-center" +
    " " +
    "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent" +
    " " +
    "data-[selected=true]:border-danger mb-5";

  const wrapper = "p-0 h-4 overflow-visible ";
  const thumb =
    "w-6 h-6 border-2 shadow-lg " +
    " " +
    "group-data-[hover=true]:border-danger" +
    " " +
    "group-data-[selected=true]:ml-6" +
    " " +
    // pressed
    "group-data-[pressed=true]:w-7" +
    " " +
    "group-data-[selected]:group-data-[pressed]:ml-4" +
    " ";
  return (
    <>
      <div>
        <Switch
          color={color}
          classNames={{
            base: cn(base),
            wrapper: wrapper,
            thumb: cn(thumb),
          }}
        >
          <div className="flex flex-col gap-1 ">
            <p className="text-medium">Enable signup</p>
            <p className="text-tiny text-default-400">
              By enabling Signup Verification, you significantly reduce the risk
              of unauthorized access to your platform, protecting both your
              users and their valuable data.
            </p>
          </div>
        </Switch>
        <Switch
          color={color}
          classNames={{
            base: cn(base),
            wrapper: wrapper,
            thumb: cn(thumb),
          }}
        >
          <div className="flex flex-col gap-1">
            <p className="text-medium">Enable email verification</p>
            <p className="text-tiny text-default-400">
              Email verification adds an extra layer of security, safeguarding
              users account against unauthorized access.
            </p>
          </div>
        </Switch>
        <Switch
          color={color}
          classNames={{
            base: cn(base),
            wrapper: wrapper,
            thumb: cn(thumb),
          }}
        >
          <div className="flex flex-col gap-1">
            <p className="text-medium">Enable KYC</p>
            <p className="text-tiny text-default-400">
              KYC adds a robust layer of identity verification, ensuring that
              each user on your platform is precisely who they claim to be.
            </p>
          </div>
        </Switch>
      </div>
    </>
  );
}

export default BrandSettings;
