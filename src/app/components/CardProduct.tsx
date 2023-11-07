
import Image from 'next/image'

interface CardProductProps {
  id: string
  imgUrl: string
  name: string
  tags: string[]
  price: number
  shortDescription: string
}

export const CardProduct = (props:CardProductProps) => {
  const {
    id,
    imgUrl,
    name,
    tags,
    price,
    shortDescription,
  } = props

  return (
    <div className='flex flex-col gap-3 items-center'>
      <div>
        <Image
            src={imgUrl}
            alt="Imagen del producto"
            title={name}
            width={800}
            height={500}
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

      {
        tags && <div className='flex gap-2 flex-wrap'>
          {
            tags.map((tg, id) => (
              <span className=' border-2 p-1 w-[100px] ' key={id}>
                {tg}
              </span>
            ))
          }
        </div>
      }

      <button className=' text-black border-[1.3px] border-black p-2 w-48 hover:bg-slate-800  hover:text-white transition-colors'>
        Comprar
      </button>
    </div>
  )
}
