import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const [error, setError]=useState('')
 const handleLogin= (data)=>{
  console.log(data)
 }
 return (
  <div className='h-[800px] flex justify-center items-center'>
<div>
<form onSubmit={handleSubmit(handleLogin)}>
      

      <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Email</span>

  </label>
  <input type='email'  {...register("email",{
   required: "Email Address required"
  })}  className="input input-bordered w-full " />
   {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}


</div>
      <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Password</span>

  </label>
  <input type='password'  {...register("password",{
   required:"Password is Required",
   minLength:{value:6, message:"Password is 6 chracter longer"}
  })}  className="input input-bordered w-full " />
  {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
  <span className="label-text">Forget Password</span>
</div>
      <input className='w-full btn btn-accent mt-8' type="submit" />

      <span className="label-text text-center">Nxew to Doctors Portal?<Link to='/signup' className='text-info'>Create new Account</Link></span>
      <p className='text-red-600'>{error}</p>
    </form>
    <div className='divider'>OR</div>
    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
</div>
  </div>
 );
};

export default Login;