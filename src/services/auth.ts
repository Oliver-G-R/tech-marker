import { UserFormBasic } from "@/models/User";

const SigUp = async (user: UserFormBasic ) => {
  try {
    const req =  await fetch("/api/auth/register", {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }) 

    if(!req.ok){
      const errorData = await req.json()
      throw new Error(errorData.message)
    }

    const resp = await req.json()

    return{
      data: resp,
      status: req.status
    }
    
  } catch (error: any) {
    return{
      error: error.message,
    }
  }
}

export default {
  SigUp
}