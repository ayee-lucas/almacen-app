import React from "react";
import CellarRow from "../Cellar/CellarRow";
import { useState, useEffect } from "react";
import _ from 'lodash'
import axios from "axios";

const CellarTable = () =>{
    const [cellar, setCellar] = useState([{}]);

    const headers = {
    "Content-Type": "application/json",
  };


  useEffect(() => {
    const getCellars = async () => {
      try {
        
        const { data } = await axios.get("/api/Controllers/Cellars/Cellars");
        console.log(data)
        
        if (data) {
          setCellar(data);
        }
       
      } catch (err) {
        console.log(err);
      }
    };

    const delayedGetCellars = _.debounce(getCellars, 500);

    delayedGetCellars();

    return delayedGetCellars.cancel;

  }, [cellar]);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-0 dark:bg-gray-500 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name & Location
              </th>
              <th scope="col" className="px-6 py-3">
                Owner
              </th>
              <th scope="col" className="px-2 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="flex px-12 py-6 justify-center">
                size
              </th>
            </tr>
          </thead>
          <tbody>
            {cellar.map(({name, location, description, owner, price, size}, i) => {
              return (
                <CellarRow
                  key={i}
                  name={name}
                  location={location}
                  description={description}
                  owner={owner}
                  price={price}
                  size={size}
                ></CellarRow>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CellarTable;