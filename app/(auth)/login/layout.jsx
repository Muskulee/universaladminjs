import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const LoginLayout = ({ children }) => {
  return (
    <>
      <div className="bg-white dark:bg-darkblack-500 min-h-screen">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left */}
          <div className="lg:w-1/2 px-5 xl:pl-12 pt-10">
            <header>
              <Link href="/" className="">
                <Image
                  width={60}
                  height={60}
                  src="/assets/logo.png"
                  className="hover:animate-spin"
                  alt="Logo"
                />
                <Image
                  src="/assets/logo.png"
                  className="hidden dark:block"
                  alt="Logo"
                  width={120}
                  height={40}
                />
              </Link>
            </header>
            <div className="max-w-[450px] m-auto pt-24 pb-16">
              <header className="text-center mb-8">
                <h2 className="text-bgray-900 dark:text-white text-4xl font-semibold font-poppins mb-2">
                  Sign in to Admin.
                </h2>
                <p className="font-urbanis text-base font-medium text-bgray-600 dark:text-bgray-50">
                  Use, reuse and launch
                </p>
              </header>
              {children}
            </div>
          </div>
          {/* Right */}
          {/* <!-- Right --> */}
          <div className="lg:w-1/2 lg:block hidden bg-[#F6FAFF] dark:bg-darkblack-600 p-20 relative">
            <ul>
              {/* <li className="absolute top-10 left-8">
                <img src="/assets/images/square.svg" alt="" />
              </li> */}
              {/* <li className="absolute right-12 top-14">
                <img src="/assets/images/vline.svg" alt="" />
              </li> */}
              {/* <li className="absolute bottom-7 left-8">
                <img src="/assets/images/dotted.svg" alt="" />
              </li> */}
            </ul>
            <div className="">
              <Image src="/assets/images/login.svg" alt="Login Image" />
            </div>
            <div>
              <div className="text-center max-w-lg px-1.5 m-auto">
                <h3 className="text-bgray-900 dark:text-white font-semibold font-popins text-4xl mb-4">
                  Speedy, Easy and Fast
                </h3>
                <p className="text-bgray-600 dark:text-bgray-50 text-sm font-medium">
                  Admin. helps you start your app, quickly,
                  <span className="text-danger-300 font-bold"> Free.</span>{" "}
                  Download now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
