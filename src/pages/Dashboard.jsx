import React from "react";
import Home from "@/components/Dashboard/Home";
import SideBar from "@/components/Dashboard/SideBar";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  return (
      <div className="bg-[E0E0E0] h-screen">
        <Navbar/>
        <Home/>
      </div>
  );
};

export default Dashboard;
