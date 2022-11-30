import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../AccountMange/AuthProvider';
import MyItems from './MyItems';

const MyProducts = () => {
 const {user}=useContext(AuthContext)
const {data: myProducts = []}=useQuery({
 queryKey:['myProduct',user?.email],
 queryFn: async ()=>{
const res = await fetch(`http://localhost:5000/myProduct?email=${user?.email}`,{
 headers:{
  authorization: `bearer ${localStorage.getItem('accessToken')}`
 }
})
const data = await res.json()
return data;
 }
})
console.log(myProducts)
 return (
  <div>
   <h1 className='text-5xl font-bold text-center text-info'>My Product</h1>
   <div className='devider'></div>
   <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-14 w-11/12 mx-auto'>
    {myProducts.length &&
     myProducts?.map(myItems=><MyItems key={myItems._id} myItems={myItems}></MyItems>)
    }
   </div>
  </div>
 );
};

export default MyProducts;