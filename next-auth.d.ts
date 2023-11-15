import { USER_ROLE } from "@/models/User"
import NextAuth from "next-auth"
 
declare module "next-auth" {
  interface Session {
    user: {
      id: string,
      email: string,
      name: string,
      role: "ADMIN" | "USER",
    }
  }
}