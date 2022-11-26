import axios from "axios"
import { useEffect, useState } from "react"

const useToken =(email)=>{
const [token, setToken] = useState('')
console.log(email)
useEffect(()=>{
if(email){
 fetch(`http://localhost:5000/jwt?email=${email}`,{
headers:{
 authoriztion: `bearer ${localStorage.getItem('accessToken')}`
}
})
.then(res=>res.json())
.then(data=>{
 console.log(data)
 if(data.accessToken){
  localStorage.setItem('accessToken', data.accessToken)
  setToken(data.accessToken)
 }
})
.catch(err=>console.log(err))
}

},[email])

return [token]
}
export default useToken;