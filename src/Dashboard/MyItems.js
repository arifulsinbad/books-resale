import React from 'react';
import { Link } from 'react-router-dom';

const MyItems = ({myItems}) => {
 const { name, img, details, price, spacialty, sold, _id, email, veryfied, location, type} = myItems;
const handleAdvertisement =(data)=>{
 const { name, img, details, price, spacialty, sold, _id, email, location, type, number, date} = data;
 const advertisement = {
  name,
  img,
  details,
  price,
  spacialty,
  sold,
  email,
  sellerId:_id,
  location,
  type,
  number,
  date,
 }
 
 fetch('http://localhost:5000/advertisement',{
  method: 'POST',
  headers:{
   'content-type' : 'application/json',
   authorization: `bearer ${localStorage.getItem('accessToken')}`
  },
  body: JSON.stringify(advertisement)
 })
 .then(res=> res.json())
 .then(data=>{
  console.log(data)
  if(data.acknowledged){
    alert('Advertisement Success')
  }
 
 })
 .catch(err=>console.log(err))
}

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
sold !== 'Out of Stock' &&  <label htmlFor="my-modal-3" onClick={()=>handleAdvertisement(myItems)} className="btn btn-primary">Advertisement</label>
   }
  </div>
</div>
</div>
 

  </div>
 );
};

export default MyItems;