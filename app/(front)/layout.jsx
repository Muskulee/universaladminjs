"use client";

import { ReactNode } from "react";
import GeneralNav from "../_lib/smalls/GeneralNav";

const FrontLayout = ({ children }) => {
  return (
    <div>
      <GeneralNav />

      <div className="px-8 mt-2 bg-[#F6FAFF]">{children}</div>
    </div>
  );
};

export default FrontLayout;
