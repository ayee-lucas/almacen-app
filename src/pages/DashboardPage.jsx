import React from "react";
import Home from "@/components/Dashboard/Home";
import SideBar from "@/components/Dashboard/SideBar";

const DashboardPage = () => {
  return (
    <>
    <div className="h-screen w-full">
       {/* Home Component */}
       <Home />

{/* Sidebar Component */}
<SideBar />
    </div>
     
    </>
  );
};

export default DashboardPage;
