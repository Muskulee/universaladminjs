"use client";

import PageHeader from "@/app/_lib/smalls/PageHeader";
import Layout from "./../layout";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { useMemo, useState } from "react";

const Contact = ({}) => {
  const [value, setValue] = useState("test@gmail.com");
  const [name, setName] = useState("tester");
  const [message, setMessage] = useState("");

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;
    if (name === "") return false;
    if (message === "") return false;

    return validateEmail(value) ? false : true;
  }, [value, message, name]);

  const inputClassName = {
    label: "text-black/50 dark:text-white/90 mt-20",
    input: [
      "bg-transparent",
      "mt-20",
      "text-black/90 dark:text-white/90",
      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
    ],
    innerWrapper: "bg-transparent mt-20",
    inputWrapper: [
      "shadow-xl",
      "bg-default-200/50",
      "dark:bg-default/60",
      "backdrop-blur-xl",
      "backdrop-saturate-200",
      "hover:bg-default-200/70",
      "dark:hover:bg-default/70",
      "group-data-[focused=true]:bg-default-200/50",
      "dark:group-data-[focused=true]:bg-default/60",
      "!cursor-text",
    ],
  };

  return (
    <>
      <PageHeader
        headerTitle="Contact Us"
        headerSubTitle="We are here to assist you"
      />

      <div className="grid grid-cols-2 grid-flow-col gap-4  ">
        <div className="px-8 rounded-2xl justify-center items-center bg-white text-danger shadow-lg">
          <h2 className="mt-20 text-center text-success">
            {`Lets connect: We are here to help, and we would love to hear form you. Whether you have a question or just want to chat`}
          </h2>

          <div className="mt-20 ">
            <Input
              className={inputClassName}
              value={name}
              type="name"
              label="Full Name"
              variant="bordered"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "success"}
              errorMessage={isInvalid && "Please enter a valid email"}
              onValueChange={setName}
              // className="max-w-xs"
            />
          </div>
          <div className="mt-20">
            <Input
              className={inputClassName}
              value={value}
              type="email"
              label="Email"
              variant="bordered"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "success"}
              errorMessage={isInvalid && "Please enter a valid email"}
              onValueChange={setValue}
              // className="max-w-xs"
            />
          </div>

          <div className="mt-20">
            <Textarea
              isInvalid={isInvalid}
              variant="bordered"
              label="Description"
              placeholder="Enter your message"
              defaultValue="Enter your message"
              errorMessage="Cannot be empty"
              className="max-w-full"
              value={message}
              onValueChange={setMessage}
            />
          </div>

          <div className="mt-10 flex justify-end">
            <Button fullWidth variant="solid" color="danger" size="lg">
              Choose
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <Image
            className="max-w-full max-h-screen"
            loading="lazy"
            alt="Contact US image"
            src="https://res.cloudinary.com/ddpqusntk/image/upload/v1708494256/contactus_axawkw.jpg"
          />
        </div>
      </div>
    </>
  );
};

Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Contact;
