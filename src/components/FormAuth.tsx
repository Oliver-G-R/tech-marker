import { UserFormBasic } from "@/models/User"
import { ChangeEvent, useState } from "react"
import { FaMailBulk, FaUser, FaUserSecret } from "react-icons/fa"
import servicesAuth from "@/services/auth"
import { Alert } from "./Alert"

interface FormAuthProps{
  typeForm: 'login' | 'register'
}
export const FormAuth = ({ typeForm}:FormAuthProps) => {

  const defaultInputValues: UserFormBasic = {
    name: '',
    email: '',
    password: ''
  }

  const [errorAuth, setErrorAuth] = useState<string | null>(null)

  const [inputValues, setInputValues] = useState<UserFormBasic>(defaultInputValues)

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target 

    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(typeForm === "register"){
      const resp = await servicesAuth.SigUp(inputValues)
      if(resp.status !== 201){
        setErrorAuth(resp.error)
      }
    }else{

    }
  }

  return (
      <>
        {errorAuth && <Alert
          typeAlert={errorAuth ? 'error' : 'success'}
          message={errorAuth}
        />}

        <form onSubmit={(e) => handleSubmit(e)} className="mt-5  flex gap-4 flex-col items-center justify-center w-[70%]">
            {typeForm === "register" && <div className="flex flex-row-reverse gap-4 items-center w-[100%]">
              <input 
                onChange={handleChange}
                className="w-[100%] outline-none placeholder-slate-950 border-b-2 px-2 py-4 " 
                type="text" 
                placeholder="Nombre" 
                name="name" />
              <FaUser/>
            </div>}
              
            <div className="flex flex-row-reverse gap-4 items-center w-[100%]">
              <input 
                onChange={handleChange}
                className="w-[100%] outline-none placeholder-slate-950 border-b-2 px-2 py-4 "
                type="email"
                placeholder="Correo"
                name="email" />
              <FaMailBulk/>
            </div>
            
            <div className="w-[100%] flex flex-row-reverse gap-4 items-center">
              <input 
                onChange={handleChange}
                className="outline-none placeholder-slate-950 border-b-2 w-[100%] px-2 py-4 "
                type="password"
                placeholder="Contraseña"
                name="password" />
              <FaUserSecret/>
            </div>
            
            <button className=' text-black border-[1.3px] border-black p-2 w-[100%] hover:bg-slate-800  hover:text-white transition-colors'>
              {
                typeForm === 'login' ? 'Iniciar sesión' : 'Registrarse'
              }
            </button>
        </form>
      </>
  )
}
