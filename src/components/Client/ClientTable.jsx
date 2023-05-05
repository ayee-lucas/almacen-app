import React from "react";
import Row  from "./Row";

const ClientTable = () =>{
    return(
        <div className="">
            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name & Surname
                            </th>
                            <th scope="col" className="px-2 py-3">
                                email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="flex px-12 py-6 justify-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <Row/>
                        <Row/>
                        <Row/>
                        <Row/>
                        <Row/>
                    </tbody>
                        
                </table>
            </div>
        </div>
    );
}

export default ClientTable;