import { NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/index';
import { UserFormBasic } from '@/models/User';
import { Hash } from '@/utilities/Hash';

export async function POST(req: Request){
  const { email, name, password:passwordUser } = await req.json() as UserFormBasic

  try {
    if(!email || !name || !passwordUser){
      return NextResponse.json({message: 'Verfique los campos de entrada'}, {status: 500})
    }

    const findUser = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if(findUser){
      return NextResponse.json({message: 'El usuario ya existe'}, {status: 400})
    }

    const passwordHash = await Hash.make(passwordUser)

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: passwordHash
      }
    })

    const {password, ...userNPassword} = user

    return NextResponse.json(userNPassword, {status: 201})


  } catch (error) {
    return NextResponse.json({message: 'Error en el servidor'}, {status: 500})
  }
}
