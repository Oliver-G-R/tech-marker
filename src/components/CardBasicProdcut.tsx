import Image from "next/image"

interface CardBasicProdcutProps {
  id: string
  imgUrl: string
  name: string
  price: number
  shortDescription: string
}


export const CardBasicProdcut = (props:CardBasicProdcutProps) => {
  const {
    id,
    imgUrl,
    name,
    price,
    shortDescription,
  } = props


  return (
    <div className=" flex flex-row items-center gap-4">
       <div>
        <Image
            src={imgUrl}
            alt="Imagen del producto"
            title={name}
            width={300}
            height={300}
         />
      </div>
      <span className='font-semibold text-2xl'>
        $ {price} MXN
      </span>
      <h3 className=''>
        {name}
      </h3>
      <p>
        {shortDescription}
      </p>


      <button className=' text-black border-[1.3px] border-black p-2 w-48 hover:bg-slate-800  hover:text-white transition-colors'>
        Eliminar
      </button>
      <button className=' text-black border-[1.3px] border-black p-2 w-48 hover:bg-slate-800  hover:text-white transition-colors'>
        Editar
      </button>

    </div>
  )
}
