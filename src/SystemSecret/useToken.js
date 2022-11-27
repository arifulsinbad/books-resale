
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../AccountMange/AuthProvider"

const useToken =(email)=>{


const [token, setToken] = useState('')
console.log(email)
useEffect(()=>{

if(email){
 fetch(`http://localhost:5000/jwt?email=${email}`)
 .then(res=>res.json())
 .then(data=>{
  console.log(data)
  if(data.accessToken){
   localStorage.setItem('accessToken', data.accessToken)
   setToken(data.accessToken)
   console.log(data.accessToken)
  }
 })
 .catch(err=>console.log(err))
}


},[email])

return [token]
}
export default useToken;