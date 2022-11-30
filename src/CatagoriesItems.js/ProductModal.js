import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AccountMange/AuthProvider';
import { DayPicker } from 'react-day-picker';
import { useNavigate } from 'react-router-dom';
const ProductModal = ({modal}) => {
const navigate = useNavigate()
 const {user} = useContext(AuthContext)
 const [selectedDate, setSelectedDate] = useState(new Date())
 const { register, handleSubmit, formState: { errors } } = useForm();
 const {name, price, email, _id, type, details, location, number} = modal;

const date = format(selectedDate, 'PP')
const handleInfo = (data)=>{
console.log(data)
const userInfo = {
 userName: user?.displayName,
 name,
 email: user?.email,
 phone: data.phone,
 addressInfo: data.address,
 price,
 date,
 sellerEmail: email,
 sellerId: _id
} 

fetch('https://books-market-arifulsinbad.vercel.app/userInfo',{
 method: 'POST',
 headers:{
  'content-type' : 'application/json',
  authorization: `bearer ${localStorage.getItem('accessToken')}`
 },
 body: JSON.stringify(userInfo)
})
.then(res=>res.json())
.then(data=>{
  if(data.acknowledged){
    alert('Booking Success')
    navigate('/dashboardLayout')
  }
 console.log(data)
})
.then(err=>console.log(err))

}

 return (
  <div>



{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className='hidden'>
      <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}

      />
      <p>You have a selected date : {date}</p>
    </div>
    <h3 className="text-lg font-bold text-center mt-4 mb-5">Seller Information</h3>
    <h3 className="text-lg font-bold">{name}</h3>
    <h3 className="text-md font-bold">Email : {email}</h3>
    <div className='flex justify-between'>
    
    <p className="py-4">Phone : {number}</p>
    </div>
    <div className='flex justify-between'>
    <p className="py-4">Location : {location}</p>
    <p className="py-4">Condition : {type}</p>
    </div>
    <p className="py-4">Description : {details}</p>
    <div>
    <h3 className="text-lg font-bold text-center mt-4 mb-5">Buyer Information</h3>
    <p className="py-4 text-center" >Date : {date}</p>
    <div className='divider'></div>
    <form onSubmit={handleSubmit(handleInfo)} >
        
  
        <div className="form-control w-full ">
    <label className="label">
      <span className="label-text">Name</span>
  
    </label>
    <input type='text' {...register('name')} defaultValue={user?.displayName} disabled  className="input input-bordered w-full " />
  </div>
        <div className="form-control w-full ">
    <label className="label">
      <span className="label-text">Email</span>
  
    </label>
    <input type='text' {...register('email')} defaultValue={user?.email} disabled className="input input-bordered w-full " />
 
 </div>
        <div className="form-control w-full ">
    <label className="label">
      <span className="label-text">Phone Number</span>
  
    </label>
    <input type='number' {...register('phone',{
     required:"Phone Number Required"
    })}  className="input input-bordered w-full " />
    {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p> }  
 </div>
        <div className="form-control w-full ">
    <label className="label">
      <span className="label-text">Address Info</span>
  
    </label>
    <textarea type='text' {...register('address',{
     required:"Address Required"
    })}  className="input input-bordered w-full h-20" />
    {errors.address && <p className='text-red-600'>{errors.address?.message}</p> }  
 </div>
        {
          email === user?.email ? <h2 className='text-xl text-error text-center font-bold'>Your Product Not Booking</h2> : <input className='w-full btn btn-accent mt-8' type="submit" value='Booking Now' />
        }
  
    
      </form>
    </div>
  </div>
</div>
  </div>
 );
};

export default ProductModal;