import React from "react";
import Sidebar from "./_components/Sidebar";
import { AIUsage } from "./_components/AIUsage";
import MobileNav from "./_components/MobileNav";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const aiUsageComponent = await AIUsage();

  return (
    <div className="bg-gray-50 h-screen flex flex-col md:flex-row">
      <div className="md:hidden lg:hidden pt-5 pl-5">
        <MobileNav AIUsageComponent={aiUsageComponent} />
      </div>
      <div className="md:w-64 hidden md:flex flex-col fixed h-full">
        <Sidebar />
        {aiUsageComponent}
      </div>
      <div className="flex-1 md:ml-64 bg-gray-50 h-fit pb-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
