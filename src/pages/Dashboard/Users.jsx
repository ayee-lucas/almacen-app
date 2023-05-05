import React from "react";
import Navbar from "@/components/Navbar";
import UsersTable from "@/components/User/UsersTable";

const Users= () =>{
    return(
        <>
            <div className="dark:bg-gray-800 h-full">
                <Navbar/>
                <div className="dark:bg-gray-800">
                    <div className="text-white dark:bg-gray-800 h-20 jetbrains-mono font-semibold text-[35px] p-5">
                        <h1 className="flex justify-center">CLIENTS</h1>
                    </div>
                    <div className="p-10"> 
                        <UsersTable/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;