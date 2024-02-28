"use client";

import { ReactNode } from "react";
import GeneralNav from "../_lib/smalls/GeneralNav";

const FrontLayout = ({ children }) => {
  return (
    <div className="bg-[#F6FAFF]">
      <GeneralNav />

      <div className="px-8 mt-2 ">{children}</div>
    </div>
  );
};

export default FrontLayout;
