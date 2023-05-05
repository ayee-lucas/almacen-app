import React, {useEffect} from "react";
import Home from "@/components/Dashboard/Home";
import SideBar from "@/components/Dashboard/SideBar";
import Navbar from "@/components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";

const DashboardPage = () => {

  const { status } = useSession();



    useEffect(() => {
    if (status === "unauthenticated") {
      signIn("credentials");
    }
  }, [status]);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};
export default DashboardPage;
