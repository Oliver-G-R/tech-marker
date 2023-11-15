'use client';
import { FormEvent } from "react";
import { FormAuth } from "@/components/FormAuth";
import Link from "next/link";

export default function SignUp(){
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
  }

  return(
    <>
      <main className="global-container">
        <div className=" mt-[100px] flex  flex-col items-center justify-center">
          <h1 className=" font-semibold text-3xl w-[600px]">
            Registrate para tener una cuenta y poder comprar tus productos 🏪
          </h1>

          <FormAuth
            typeForm="register"
          />

          <span className=" mt-4">
            ¿Ya tienes una cuenta? <Link href="/SignIn">Inicia sesión</Link>
          </span>
        </div>
      </main>
    </>
  )
}