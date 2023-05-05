import React from "react";

const CellarRow = ({name, location, description, owner, price, size}) => {

    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <div className="px-2 pl-3 flex justify-around text-base font-semibold">{name}  </div>
                <div className="text-base font-semibold">{location}  </div>
            </th>
            <td className="px-6 py-4">
                <div className="font-normal">{owner} </div>
            </td>
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <div className="text-base font-semibold">{size}  </div>
            </th>
            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <div className="text-base font-semibold">{price}  </div>
            </th>
            <td className="flex justify-center align-middle">
                <div className="flexitems-center">
                    <div className="font-normal text-gray-500">{description}  </div>
                </div>
            </td>
            
        </tr>
    );
}

export default CellarRow;