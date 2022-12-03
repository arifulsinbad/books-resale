
import React, { useContext, useState } from 'react';
import { AuthContext } from '../AccountMange/AuthProvider';


const AllItems = ({addPD, products, handleModal}) => {
  const {user} = useContext(AuthContext)


 const {name, img, details, price,  veryfied, location, type} = addPD

 return (
  <div>
 
  
 

  <div className="card card-compact  bg-base-100 shadow-xl  " style={{height: '40em'}}>
<figure><img src={img} alt="Shoes" className=''/></figure>
<div className="card-body">
  <h2 className="card-title">{name}</h2>
  <p>{details}</p>
  <p>Location : {location}</p>
  <div className='flex justify-between'>
  <p>Price : {price}tk</p>
  <p>Condition : {type}</p>
  </div>
<div className='flex justify-between'>


</div>
 {
  veryfied === 'Veryfied' ? <p className='text-lg font-semibold text-green-500'>Seller : {veryfied}</p> : 'Seller : Non Veryfied'
 }
  <div className="card-actions justify-end">
   
   <label htmlFor="my-modal-3" onClick={()=>handleModal(addPD)} className="btn btn-primary">Booking Details</label>
   
  </div>
</div>
</div>
 

  </div>

 
 );
};

export default AllItems;