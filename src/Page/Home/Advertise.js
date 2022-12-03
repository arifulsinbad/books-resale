import React from 'react';

const Advertise = ({myItems, handleModal}) => {
 const {name, img, details, price, spacialty, veryfied, location, type, sold} = myItems;
 return (
  <div>
 
  
 

  <div className="card card-compact  bg-base-100 shadow-xl   mx-auto" style={{height: '40em'}}>
<figure><img src={img} alt="Shoes" className='' /></figure>
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
   
 
<label htmlFor="my-modal-3" onClick={()=>handleModal(myItems)} className="btn btn-primary">Booking Details</label>
  </div>
</div>
</div>
 

  </div>
 );
};

export default Advertise;