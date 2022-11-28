import { useEffect, useState } from "react"

const useVerify = (email) =>{
const [isVerify, setVerify ] = useState(false)

const [isLoading, setIsLoading]=useState(true)




useEffect(()=>{
if(email){
 fetch(`https://books-market-smoky.vercel.app/users/user/lam@gmail.com`)
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