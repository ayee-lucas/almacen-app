import React from "react";
import Navbar from "@/components/Navbar";
import CellarTable from "@/components/Cellar/CellarTable";

const Cellar = () =>{
    return(
        <>
            <div className="dark:bg-gray-800 h-full">
                <div className="dark:bg-gray-800">
                    <div className="text-white dark:bg-gray-800 h-20 jetbrains-mono font-semibold text-[35px] p-5">
                        <h1 className="flex justify-center">CELLAR</h1>
                    </div>
                    <div className="p-10"> 
                        <CellarTable/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cellar;