import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import logo1 from '../../../images/logo/logo1.png'
// import logo2 from '../../../images/logo/logo2.png'
import logo3 from '../../../images/logo/logo3.jpg'
import Catagory from './Catagory';

const Catagories = () => {
const [catagory, setCatagory] = useState([])
useEffect(()=>{
   fetch('https://books-market-smoky.vercel.app/products')
   .then(res=>res.json())
   .then(data=>{
      setCatagory(data)
   })
   .catch(err=>console.log(err))
},[])
 return (
  <div>
   <h1 className='text-4xl font-bold text-center text-gray-600'>Books Catagories</h1>
   <div className='divider'>Collect</div>
   <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7'>
{
 catagory.map(catagory=><Catagory key={catagory._id} catagory={catagory}></Catagory>)
}
   </div>
  </div>
 );
};

export default Catagories;