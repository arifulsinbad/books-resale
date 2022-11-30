import { add } from 'date-fns';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../AccountMange/AuthProvider';
import useVerify from '../SystemSecret/useVerify';

const AddProducts = ({addPD, products, handleModal}) => {
  const {user} = useContext(AuthContext)
  const [isVerify] = useVerify(user?.email)

 const {name, img, details, price, spacialty, sold, veryfied, location, type} = addPD

 return (
  <div>
 
  
 

  <div className="card card-compact  bg-base-100 shadow-xl  " style={{height: '30vw'}}>
<figure><img src={img} alt="Shoes" className='' style={{height: '26vw'}}/></figure>
<div className="card-body">
  <h2 className="card-title">{name}</h2>
  <p>{details}</p>
  <p>Location : {location}</p>
  <div className='flex justify-between'>
  <p>Price : {price}tk</p>
  <p>Condition : {type}</p>
  </div>
<div className='flex justify-between'>

  <p className='text-xl font-semibold text-green-500'>{sold}</p>
</div>
 {
  veryfied === 'Veryfied' ? <p className='text-lg font-semibold text-green-500'>Seller : {veryfied}</p> : 'Seller : Non Veryfied'
 }
  <div className="card-actions justify-end">
   
   {
sold !== 'Out of Stock' &&  <label htmlFor="my-modal-3" onClick={()=>handleModal(addPD)} className="btn btn-primary">Booking Details</label>
   }
  </div>
</div>
</div>
 

  </div>

 
 );
};

export default AddProducts;