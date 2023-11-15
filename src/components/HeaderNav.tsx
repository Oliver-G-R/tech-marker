"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react"

export const HeaderNav =  () => {
  const {data: session, status} = useSession()
  console.log(session)
  return (
    <header className="fixed bg-white left-0 right-0">
      <div className="flex flex-col  global-container">
        <div className="flex gap-2 items-center justify-center">
            <FaFire/>
           <span className="text-2xl">TechMarket</span>
        </div>
        <nav className="mt-3">
          <ul className="flex gap-3 justify-center">
            {!session?.user && <li>
              <Link href="/SignIn">Iniciar</Link>
            </li>}
            {session?.user && <li>
              <button onClick={() => signOut()}>
                Salir
              </button>
            </li>}
            {/* Controlar estado para mostrar salir o iniciar */}
            {!session?.user && <li>
              <Link href="/SignUp">Registrarse</Link>
            </li>}
            {!session?.user && session?.user.role === 'ADMIN' && <li>
              <Link href="/AgregarProdcto">Agregar producto</Link>
            </li>}
          </ul>
        </nav>
      </div>
    </header>
  )
}
