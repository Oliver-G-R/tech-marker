export enum USER_ROLE {
  ADMIN = 'admin',
  USER_BASIC = 'basic'
}

export type UserFormBasic = Omit<User, "id" | "role">

export interface User {
  id: string
  email: string 
  name: string 
  role: USER_ROLE  
  password: string
}

export interface FullUser extends User{
  createdAt: Date 
  updatedAt: Date
}
