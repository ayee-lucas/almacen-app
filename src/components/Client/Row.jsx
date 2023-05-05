import React from "react";
import Image from "next/image";
import user from "../../assets/img/user.png";

const Row = ({username, name, surname, email, role}) => {

    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">
                <div className="font-normal">
                    {username}           
                </div>
            </td>
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <Image src={user} width={40} height={40} alt="logo" className="user-image max-lg:w-12"/>
                <div className="px-2 pl-3 flex justify-around text-base font-semibold">{name}  </div>
                <div className="text-base font-semibold">{surname}  </div>
            </th>
            <td className="px-2 py-4">
                <div className="flexitems-center">
                    <div className="font-normal text-gray-500">{email}  </div>
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="font-normal">{role} </div>
            </td>
            <td className="flex justify-center align-middle">
                <button href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-5 h-full">Edit</button>
                <button href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-5">Delete</button>
            </td>
        </tr>
    );
}

export default Row;