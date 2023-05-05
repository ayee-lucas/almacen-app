import React from "react";
import Image from "next/image";
import user from "../../assets/img/user.png";
import {AiFillMail} from "react-icons/ai";
import Stat from "./Stat";
import LargeStat from "./LargeStat";

const Home = () => {
    return(
        <>
            <div className="bg-[#E0E0E0] h-full max-h-screen">

                <div>
                    <h1 className="pt-5 pl-8 raleway text-[35px] tracking-tighter font-semibold max-lg:text-[25px]">Overview</h1>
                </div>

                <div className="bg-[#E0E0E0] flex justify-around">

                    <div className="w-[65%]">
                        <div className="">
                            <dl className="grid grid-cols-3 text-center max-lg:grid-cols-2">
                                <Stat/>
                                <Stat/>
                                <div className="p-4 h-64 max-lg:hidden">
                                    <div className="bg-white rounded-2xl drop-shadow-lg h-full">
                                        <div className="bg-[#5200FF] h-10 rounded-t-lg">
                                            <p>s</p>
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </div>
                        <div className="">
                            <dl className="grid grid-cols-2 text-center max-lg:grid-cols-1">
                                <LargeStat/>
                                <LargeStat/>
                            </dl>
                        </div>
                    </div>

                    <div className="relative h-full w-[30%]">
                        <div className="bg-[#E0E0E0] h-full">
                            <div className="p-5 flex">
                                <div className="bg-[#5200FF] p-1 rounded-full max-lg:w-12 max-lg:h-12">
                                    <Image src={user} width={70} height={70} alt="logo" className="user-image max-lg:w-12"/>
                                </div>
                                <div>
                                    <p className="pl-5 h-100 justify-center text-[35px] k2d tracking-tighter font-semibold max-lg:text-[25px]">
                                        Usuario
                                    </p>
                                    <div className="flex pl-5">
                                        <AiFillMail className="mt-1 max-lg:mt-0"/>
                                        <p className="inline-block align-top pl-2 h-100 justify-center text-[15px] k2d tracking-tighter font-light max-lg:text-[11px]">
                                            correo@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full">
                                <div className=" p-5">
                                    <div className="bg-white rounded-2xl drop-shadow-lg h-full">
                                        <p>a</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;