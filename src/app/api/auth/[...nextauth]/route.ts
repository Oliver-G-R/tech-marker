import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from '../../../../../prisma/index';
import { Hash } from "@/utilities/Hash";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "text", },
        password: { type: "password", },
      },
      async authorize(credentials, req) {

        if (!credentials) throw new Error('Sin credenciales')
        
        const userFound = await prisma.user.findUnique({
            where: {
                email: credentials.email
            }
        })

        if (!userFound) throw new Error('Usuario no encontrado')

        const matchPassword = await Hash.compare(credentials.password, userFound.password)

        if (!matchPassword) throw new Error('Usario o contraseña incorrecta')

        return {
          email: userFound.email,
        }
      },
    }),
  ],
  pages: {
    signIn: "/SignIn",
  },

  callbacks: {
    session: async (session:any) => {

      const email = session.session.user.email
      const user = await prisma.user.findUnique({
        where: {
          email
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
        }
      })

      session.user = user

      return Promise.resolve(session);
    }
  },

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };