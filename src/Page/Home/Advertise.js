import React from 'react';

const Advertise = ({myItems, handleModal}) => {
 const {name, img, details, price, spacialty} = myItems;
 return (
  <div >
 
   <div >
   <div className="card card-compact  bg-base-100 shadow-xl " style={{height: '27vw'}}>
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <p>Price : {price}tk</p>
    
    <div className="card-actions justify-end">
     
    <label htmlFor="my-modal-3" onClick={()=>handleModal(myItems)} className="btn btn-primary">Buy Now</label>
    </div>
  </div>
</div>
   </div>

  </div>
 );
};

export default Advertise;