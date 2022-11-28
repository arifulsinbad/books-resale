import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AccountMange/AuthProvider';

const ReportModal = ({modal}) => {
 const {user} = useContext(AuthContext)
 const { register, handleSubmit, formState: { errors } } = useForm();
//  const { date,  sellerEmail,} = modal;

const handleInfo = (data)=>{
// console.log(data)
const userInfo = {
 userName: user?.displayName,

 email: user?.email,
 
 phone: data.phone,
 reportInfo: data.report,
sellerEmail: modal.sellerEmail,
productId : modal.sellerId

 

} 

fetch('https://books-market-smoky.vercel.app/report',{
 method: 'POST',
 headers:{
  'content-type' : 'application/json'
 },
 body: JSON.stringify(userInfo)
})
.then(res=>res.json())
.then(data=>{
  if(data.acknowledged){
    alert('Report Success')
  }
 console.log(data)
})
.then(err=>console.log(err))

}

 return (
  <div>
   {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    {/* <h3 className="text-lg font-bold">{bookName}</h3> */}
    {/* <p className="py-4">Date : {date}</p> */}
    <div>
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
      <span className="label-text">Report Subject</span>
  
    </label>
    <textarea type='text' {...register('report',{
     required:"Report Required"
    })}  className="input input-bordered w-full h-20" />
    {errors.report && <p className='text-red-600'>{errors.report?.message}</p> }  
 </div>
        <input className='w-full btn btn-accent mt-8' type="submit" value='Report Modal' />
  
    
      </form>
    </div>
  </div>
</div>
  </div>
 );
};

export default ReportModal;