import { useEffect, useState } from "react"

interface AlertProps{
  typeAlert: 'success' | 'error'
  message: string | null
}
export const Alert = ({typeAlert, message = "Hola"}:AlertProps) => {

  const [showAlert, setShowAlert] = useState<boolean>(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    console.log("message", message)
    setShowAlert(true)

    if(message){
      timeout = setTimeout(() => {
        setShowAlert(false)
      }, 3000);
    }

    // clear timeout when unmount
    return () => clearTimeout(timeout)

  }, [message])


  return showAlert && (
    <div
      className={`p-2 mt-4  w-2/5 text-center text-white  shadow-md 
        ${typeAlert === 'success' ? ' bg-green-500' : 'bg-red-500'}`}>
      {message}
    </div>
  )
}
