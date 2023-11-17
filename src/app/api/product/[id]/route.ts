import { NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/index';
import { ProductFormBasic } from '@/models/Product';
interface Params {
  params: { id: string };
}

export async function GET(req: Request, { params }: Params) {
  try {
    const { id } = params;

    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    console.log(product);
    if (!product) {
      return NextResponse.json({ message: "Producto no encontrado" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error en el servidor" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: Params) {
  
  try {
    const {name, price, description, imgUrl} = await req.json()  as ProductFormBasic
    const { id } = params;

    const productUpdate = await prisma.product.update({
      where: {
        id
      },
      data: {
        name,
        price,
        description,
        imgUrl
      },
    });

    console.log(productUpdate);


    if (!productUpdate) {
      return NextResponse.json({ message: "Producto no encontrado" }, { status: 404 });
    }

    return NextResponse.json(productUpdate, { status: 200 });
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Error en el servidor" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: Params) {
  try {
    const { id } = params;

    const product = await prisma.product.delete({
      where: {
        id: id,
      },
    });

    if (!product) {
      return NextResponse.json({ message: "Producto no encontrado" }, { status: 404 });
    }

    console.log(product);

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error en el servidor" }, { status: 500 });
  }
}