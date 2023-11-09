import { NextResponse } from "next/server"
import { prisma } from '../../../../prisma/index';

export async function POST(req: Request){
  
  try {
    

  } catch (error) {
    console.log(error)
    return NextResponse.json({message: 'Error en el servidor'}, {status: 500})
  }
}
