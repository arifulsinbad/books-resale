import { add } from 'date-fns';
import React, { useState } from 'react';

const AddProducts = ({addPD, products, handleModal}) => {

 const {bookName: name, img, details, price, spacialty, sold} = addPD

 return (
  <div>
 
  
 {
  products.name === spacialty ? <>
  <div className="card card-compact  bg-base-100 shadow-xl  " style={{height: '30vw'}}>
<figure><img src={img} alt="Shoes" className='' style={{height: '100%'}}/></figure>
<div className="card-body">
  <h2 className="card-title">{name}</h2>
  <p>{details}</p>
  <p>Price : {price}tk</p>
  <p className='text-xl font-semibold text-green-500'>{sold}</p>
  <div className="card-actions justify-end">
   
    <label htmlFor="my-modal-3" onClick={()=>handleModal(addPD)} className="btn btn-primary">Buy Now</label>
  </div>
</div>
</div>
 
 </> : <h3 className='text-2xl text-center text-gray-500 font-bold mt-40'>No Items</h3>
 }
  </div>

 
 );
};

export default AddProducts;