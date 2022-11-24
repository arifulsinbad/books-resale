import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const [error, setError]=useState('')
 const handleSignup = (data)=>{

 }
 return (
  <div className='h-[800px] flex justify-center items-center'>
  <div>
  <form onSubmit={handleSubmit(handleSignup)} >
        
  
        <div className="form-control w-full ">
    <label className="label">
      <span className="label-text">Name</span>
  
    </label>
    <input type='text' {...register('name',{
     required:'Name Required'
    })}   className="input input-bordered w-full " />
    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
     
  
  
  </div>
        <div className="form-control w-full ">
    <label className="label">
      <span className="label-text">Email</span>
  
    </label>
    <input type='email' {...register('email',{
     required:"Email Required"
    })}  className="input input-bordered w-full " />
    {errors.email && <p className='text-red-600'>{errors.email?.message}</p> }
     
  
  
  </div>
        <div className="form-control w-full ">
    <label className="label">
      <span className="label-text">Password</span>
  
    </label>
    <input type='password' {...register('password',{
     required: 'Password Required',
     minLength:{value: 6, message:'minimum 6 chracter'},
     pattern:{value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, message:'Strong password Please'}
    })}  className="input input-bordered w-full " />
    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
   
    
  </div>
        <input className='w-full btn btn-accent mt-8' type="submit" />
  
        <span className="label-text text-center">Alredy have a Account?<Link to='/login' className='text-info'>Login Now</Link></span>
        <p className='text-red-600'>{error}</p>
      </form>
      <div className='divider'>OR</div>
      <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
  </div>
    </div>
 );
};

export default SignUp;