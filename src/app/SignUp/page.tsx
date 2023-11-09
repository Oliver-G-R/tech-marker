'use client';

import { FormEvent } from "react";
import { HeaderNav } from "../components/HeaderNav";
import { FaUser, FaMailBulk, FaUserSecret } from "react-icons/fa";

export default function SignUp(){
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
  }

  return(
    <>
      <HeaderNav/>
      <main className="global-container">
        <div className=" mt-[100px] flex  flex-col items-center justify-center">
          <h1 className=" font-semibold text-3xl w-[600px]">
            Registrate para tener una cuenta y poder comprar tus productos 🏪
          </h1>

          <form onSubmit={(e) => handleSubmit(e)} className="mt-10 flex gap-4 flex-col items-center justify-center w-[70%]">
            <div className="flex flex-row-reverse gap-4 items-center w-[100%]">
              <input className="w-[100%] outline-none placeholder-slate-950 border-b-2 px-2 py-4 " type="text" placeholder="Nombre" name="name" />
              <FaUser/>
            </div>
             
            <div className="flex flex-row-reverse gap-4 items-center w-[100%]">
              <input className="w-[100%] outline-none placeholder-slate-950 border-b-2 px-2 py-4 " type="text" placeholder="Correo" name="email" />
              <FaMailBulk/>
            </div>
            
            <div className="w-[100%] flex flex-row-reverse gap-4 items-center">
              <input className="outline-none placeholder-slate-950 border-b-2 w-[100%] px-2 py-4 " type="text" placeholder="Contraseña" name="password" />
              <FaUserSecret/>
            </div>
           
            <button className=' text-black border-[1.3px] border-black p-2 w-[100%] hover:bg-slate-800  hover:text-white transition-colors'>
              Registrar
            </button>
          </form>
        </div>
      </main>
    </>
  )
}