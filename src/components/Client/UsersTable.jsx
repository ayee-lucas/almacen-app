import React from "react";
import Row from "./Row";
import { useState, useEffect } from "react";
import axios from "axios";
import _ from 'lodash'

const UsersTable = () => {
  const [users, setUsers] = useState([{}]);

  const headers = {
    "Content-Type": "application/json",
  };


  useEffect(() => {
    const getUsers = async () => {
      try {
        
        const { data } = await axios.get("/api/Controllers/Users/Users");
        
        if (data) {
          setUsers(data);
        }
       
      } catch (err) {
        console.log(err);
      }
    };

    const delayedGetUsers = _.debounce(getUsers, 500);

    delayedGetUsers();

    return delayedGetUsers.cancel;

  }, [users]);

  return (
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
            {users.map(({ username, name, surname, email, role }, i) => {
              return (
                <Row
                  key={i}
                  username={username}
                  name={name}
                  surname={surname}
                  email={email}
                  role={role}
                ></Row>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
