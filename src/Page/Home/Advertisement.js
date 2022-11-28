import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductModal from '../../CatagoriesItems.js/ProductModal';
import Advertise from './Advertise';

const Advertisement = () => {
 const [modal, setAdvertise]=useState('')
const {data: advertisement = []}=useQuery({
  queryKey:['advertisement'],
  queryFn: async ()=>{
    const res = await fetch('https://books-market-smoky.vercel.app/advertisement');
    const data = await res.json();
    return data;
  }
})


const handleModal=(dataAdvertise)=>{
  setAdvertise(dataAdvertise)
}
 return (
  <div >
   <div>
   <h1 className='text-4xl font-bold text-center text-primary'>Advertisement Items</h1>
   <div className='divider'>OR</div>
   </div>
  <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-14 mb-24'>
{
  advertisement.map(myItems=>myItems !== 'Out of Stock' && <Advertise key={myItems._id} myItems={myItems} handleModal={handleModal}></Advertise>)
}
  </div>
<ProductModal modal={modal}></ProductModal>
  </div>
 );
};

export default Advertisement;