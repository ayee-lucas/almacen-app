import { useSession, signIn, signOut } from "next-auth/react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";

import React from "react";

const LoginBtn = ({ isSecondVisible }) => {
  const { data: session } = useSession();

  return (
    <div className="fixed bottom-10 left-10 z-50 max-sm:left-5 max-sm:bottom-5 ">
      {session?.user ? (
        <button
          className={
            !isSecondVisible
              ? "hidden"
              : "bg-black py-3 px-7 rounded-[50px] relative flex justify-center items-center animate__animated animate__fadeInUp ring-1 ring-white ring-inset max-sm:ring-transparent max-sm:bg-transparent"
          }
          onClick={() => signOut()}
        >
          <AiOutlineLogout className="text-white text-[20px] w-full h-full" />
        </button>
      ) : (
        <button
          className={
            !isSecondVisible
              ? "hidden"
              : "bg-black py-3 px-7 rounded-[50px] relative flex justify-center items-center animate__animated animate__fadeInUp ring-1 ring-white ring-inset max-sm:ring-transparent max-sm:bg-transparent"
          }
          onClick={() => signIn()}
        >
          <AiOutlineLogin className="text-white text-[20px] w-full h-full" />
        </button>
      )}
    </div>
  );
};

export default LoginBtn;
