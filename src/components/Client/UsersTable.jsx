import React from "react";
import Row from "./Row";
import { useState, useEffect } from "react";
import axios from "axios";

const UsersTable = () => {
  /*const [users, setUsers] = useState([{}]);

  const headers = {
    "Content-Type": "application/json",
  };

  const globalURL = `${process.env.NEXTAUTH_URL}api/`;

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        `${globalURL}Controllers/Users/Users`,
        { headers: headers }
      );
      if (data.users) {
        setUsers(data.users);
      }
      console.log(data)
    } catch (err) {
      console.log(err);
      throw new Error("Error getting users");
    }
  };

  useEffect(()=> getUsers,[])*/

    return(
        <div>
            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-0 dark:bg-gray-500 dark:text-gray-400">
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
                        {
                            users.map(({username, name, surname, email, role}, i)=>{
                                return(
                                <Row 
                                    key={i}
                                    username={username}
                                    name={name} 
                                    surname={surname} 
                                    email={email} 
                                    role={role}  
                                    >
                                </Row>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UsersTable;