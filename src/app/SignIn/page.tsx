"use client";

import { FormAuth } from "@/components/FormAuth";
import Link from "next/link";
import { FormEvent } from "react";

export default function SignIn () {
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
