import { add } from 'date-fns';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../AccountMange/AuthProvider';
import useVerify from '../SystemSecret/useVerify';

const AddProducts = ({addPD, products, handleModal}) => {
  const {user} = useContext(AuthContext)
  const [isVerify] = useVerify(user?.email)

 const {bookName: name, img, details, price, spacialty, sold} = addPD

 return (
  <div>
 
  
 

  <div className="card card-compact  bg-base-100 shadow-xl  " style={{height: '30vw'}}>
<figure><img src={img} alt="Shoes" className='' style={{height: '26vw'}}/></figure>
<div className="card-body">
  <h2 className="card-title">{name}</h2>
  <p>{details}</p>
  <p>Price : {price}tk</p>
  {
    isVerify && <p className=''>Verified</p>
  }
  <p className='text-xl font-semibold text-green-500'>{sold}</p>
  <div className="card-actions justify-end">
   
    <label htmlFor="my-modal-3" onClick={()=>handleModal(addPD)} className="btn btn-primary">Buy Now</label>
  </div>
</div>
</div>
 

  </div>

 
 );
};

export default AddProducts;