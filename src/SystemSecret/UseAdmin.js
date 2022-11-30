import { useEffect, useState } from "react"

const UseAdmin = (email) =>{
const [isAdmin, setAdmin ] = useState(false)
const [isSeller, setIsSeller] = useState(false)
const [isLoading, setIsLoading]=useState(true)
useEffect(()=>{
if(email){
 fetch(`http://localhost:5000/users/user/${email}`,{
  headers:{
   authorization: `bearer ${localStorage.getItem('accessToken')}`
  }
 })
 .then(res=>res.json())
 .then(data=>{
setAdmin(data.isAdmin)
if(data.isSeller){
 setIsSeller(true)
}
setIsLoading(false)
 })
 .catch(err=>console.log(err))
}
},[email, isSeller])
return [isAdmin, isLoading, isSeller];
}
export default UseAdmin;