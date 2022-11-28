import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Advertise from './Advertise';

const Advertisement = () => {
 
const {data: advertisement = []}=useQuery({
  queryKey:['advertisement'],
  queryFn: async ()=>{
    const res = await fetch('http://localhost:5000/advertisement');
    const data = await res.json();
    return data;
  }
})
 return (
  <div >
   <div>
   <h1 className='text-4xl font-bold text-center text-primary'>Advertisement Items</h1>
   <div className='divider'>OR</div>
   </div>
  <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-14 mb-24'>
{
  advertisement.map(myItems=><Advertise key={myItems._id} myItems={myItems}></Advertise>)
}
  </div>

  </div>
 );
};

export default Advertisement;