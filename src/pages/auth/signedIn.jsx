import React, { useEffect } from 'react'
import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/router";

const signedIn = () => {
  const router = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("No JWT");
      console.log(status);
      void router.push("/Login")
      
    } else if (status === "authenticated"){
      void router.push("/DashboardPage");
    }
  }, [status]);

  return (
    <div>singIn</div>
  )
}

export default signedIn