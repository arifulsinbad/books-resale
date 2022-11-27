import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../AccountMange/AuthProvider';

const MyProducts = () => {
 const {user}=useContext(AuthContext)
const {data: myProdeucts = []}=useQuery({
 queryKey:['myProduct',user?.email],
 queryFn: async ()=>{
const res = await fetch(`http://localhost:5000/myProduct?email=${user?.email}`)
const data = await res.json()
return data;
 }
})
console.log(myProdeucts)
 return (
  <div>
   
  </div>
 );
};

export default MyProducts;