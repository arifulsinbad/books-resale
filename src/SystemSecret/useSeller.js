import { useEffect, useState } from "react"

const useSeller = (email) =>{

const [isSeller, setIsSeller] = useState(false)
const [isLoading, setIsLoading]=useState(true)
useEffect(()=>{
if(email){
 fetch(`https://books-market-arifulsinbad.vercel.app/users/user/${email}`,{
  headers:{
    authorization: `bearer ${localStorage.getItem('accessToken')}`
  }
 })
 .then(res=>res.json())
 .then(data=>{

  setIsSeller(data.isSeller)
setIsLoading(false)
 })
 .catch(err=>console.log(err))
}
},[email, isSeller])
return [isSeller, isLoading];
}
export default useSeller;