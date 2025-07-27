"use client";

import Loader from "@/components/custom/loader";
import UserButton from "@/modules/auth/components/UserButton";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardWrapper = ({ children }: Props) => {
  return (
    <main id="wrapper" className="flex flex-col flex-1 h-full">
      <UserButton />
      {false ? <Loader /> : children}
    </main>
  );
};

export default DashboardWrapper;
