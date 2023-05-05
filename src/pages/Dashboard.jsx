import React, {useEffect} from "react";
import Home from "@/components/Dashboard/Home";
import SideBar from "@/components/Dashboard/SideBar";
import Navbar from "@/components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";


const Dashboard = () => {

  const { status } = useSession();

    useEffect(() => {
    if (status === "unauthenticated") {
      signIn("credentials");
    }
  }, [status]);

  return (
   <div className="bg-[E0E0E0] h-screen">
        <Navbar/>
        <Home/>
      </div>
  );
};
export default Dashboard;
