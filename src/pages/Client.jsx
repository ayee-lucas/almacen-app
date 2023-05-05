import React from "react";
import Navbar from "@/components/Navbar";
import ClientTable from "@/components/Client/ClientTable";

const Client= () =>{
    return(
        <>
            <div className="dark:bg-gray-800 h-full">
                <Navbar/>
                <div className="dark:bg-gray-800">
                    <div className="text-white dark:bg-gray-800 h-20 jetbrains-mono font-semibold text-[35px] p-5">
                        <h1 className="flex justify-center">CLIENTS</h1>
                    </div>
                    <div className="p-10"> 
                        <ClientTable/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Client;