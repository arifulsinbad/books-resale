import React from 'react';
import { Link } from 'react-router-dom';

const MyItems = ({myItems}) => {
 const { name, img, details, price, spacialty, sold, _id, email} = myItems;
const handleAdvertisement =(data)=>{
 const { name, img, details, price, spacialty, sold, _id, email} = data;
 const advertisement = {
  name,
  img,
  details,
  price,
  spacialty,
  sold,
  email,
  myProduct:_id
 }
 
 fetch('http://localhost:5000/advertisement',{
  method: 'POST',
  headers:{
   'content-type' : 'application/json'
  },
  body: JSON.stringify(advertisement)
 })
 .then(res=> res.json())
 .then(data=>{
  console.log(data)
 
 })
 .catch(err=>console.log(err))
}

 return (
  <div>
   <div>
   
   </div>
   <div>
   <div className="card card-compact  bg-base-100 shadow-xl " style={{height: '27vw'}}>
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <p>Price : {price}tk</p>
    <p className='text-xl font-semibold text-green-500'>{sold}</p>
    <div className="card-actions justify-end">
     
      {
       sold !== 'Out of Stock' && <label onClick={()=>handleAdvertisement(myItems)} className="btn btn-primary">Add Home</label>
      }
    </div>
  </div>
</div>
   </div>

  </div>
 );
};

export default MyItems;