import { HeaderNav } from "@/components/HeaderNav"
import { userDataCookie } from "@/models/User";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {

  const session = await getServerSession(authOptions);

  const userData = session?.user 

  if( userData?.role !== "ADMIN"){
    redirect('/')
  }

  return(
    <>
      <HeaderNav/>
         <main className="global-container">
            <div className="mt-[100px]">
              <h1 className="text-3xl">
                Dashboard
              </h1>

            </div>

         </main>
        
    </>
  )
}