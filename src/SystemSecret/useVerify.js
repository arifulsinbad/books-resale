import { useEffect, useState } from "react"

const useVerify = (email) =>{
const [isVerify, setVerify ] = useState(false)

const [isLoading, setIsLoading]=useState(true)




useEffect(()=>{
if(email){
 fetch(`http://localhost:5000/users/user/lam@gmail.com`,{
  headers:{
   authorization: `bearer ${localStorage.getItem('accessToken')}`
  }
 })
 .then(res=>res.json())
 .then(data=>{
setVerify(data.isVerify)

setIsLoading(false)
 })
 .catch(err=>console.log(err))
}
},[email, isVerify])
return [isVerify, isLoading];
}
export default useVerify;