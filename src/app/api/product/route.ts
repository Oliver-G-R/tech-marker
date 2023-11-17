import { NextResponse } from "next/server"
import { prisma } from '../../../../prisma/index';
import { ProductFormBasic } from "@/models/Product";

export async function POST(req: Request){
  try {
    const { name, imgUrl, description, price } = await req.json() as ProductFormBasic

    if(!name || !imgUrl || !description || !price){
      return NextResponse.json({message: 'Faltan datos'}, {status: 400})
    }

    const parsedPrice = parseFloat(price as any)

    const product =  await prisma.product.create({
      data: {
        name,
        imgUrl,
        description,
        price: parsedPrice
      },
    })

    console.log(product)

    return NextResponse.json(product, {status: 201})

  } catch (error) {
    console.log(error)
    return NextResponse.json({message: 'Error en el servidor'}, {status: 500})
  }
}


export async function GET(req: Request){
  try {

    const products =  await prisma.product.findMany()

    return NextResponse.json(products, {status: 201})

  } catch (error) {
    console.log(error)
    return NextResponse.json({message: 'Error en el servidor'}, {status: 500})
  }
}
