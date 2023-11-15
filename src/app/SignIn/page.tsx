import { FormAuth } from "@/components/FormAuth";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function SignIn () {
  const session = await getServerSession(authOptions)
  const userData = session?.user 

  if(userData?.user){
    redirect('/')
  }
  return (
      <main className="global-container">
        <div className="mt-[100px] flex  flex-col items-center justify-center">
          <h1 className=" font-semibold text-3xl w-[600px]">
            Inicia sesión
          </h1>

          <FormAuth
            typeForm="login"
          />

          <span className=" mt-4">
            ¿Aún no tienes una cuenta? <Link href="/SignUp">Registrate</Link>
          </span>
        </div>
      </main>
  )
}
