"use client"

import { ProductFormBasic } from "@/models/Product"
import { useState } from "react"

export const FormProduct = () => {
  const defaultProduct: ProductFormBasic = {
    name: '',
    price: 0,
    description: '',
    imgUrl: '',
  }

  const [productInput, setProductInput] = useState<ProductFormBasic>(defaultProduct)
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProductInput({
      ...productInput,
      [name]: value
    })
  }


  return (
    <>
      <form className="mt-10 flex flex-col items-center w-[70%] gap-4" onSubmit={handleSubmit}>
        <input className=" border outline-none w-full px-2 py-4" placeholder="Nombre del prodcto" type="text" name="" />
        <input className=" border outline-none w-full px-2 py-4" placeholder="Url de la imagen" type="text" name="" />
        <input className=" border outline-none w-full px-2 py-4" placeholder="Precio" type="number" name="" />
        <textarea className="border outline-none px-2 py-4 w-full resize-none" placeholder="Descripcion" name=""></textarea>
        <button className=' text-black border-[1.3px] border-black p-2 w-[100%] hover:bg-slate-800  hover:text-white transition-colors'>
          Guardar
        </button>
      </form>
    </>
  )
}
