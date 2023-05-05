
import React, { useEffect, useState, createContext } from "react";

import Home from "@/components/Dashboard/Home";
import SideBar from "@/components/Dashboard/SideBar";
import Navbar from "@/components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";


export const DashboardContext = createContext();

const Dashboard = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  const value = {
    nav,
    handleNav
  };

  return (
    <>
      <DashboardContext.Provider value={value}>
        <div className="bg-[E0E0E0] h-screen">
          <SideBar />
          <Navbar />
          <Home />
        </div>
      </DashboardContext.Provider>
    </>
  );
};
export default Dashboard;

