import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../SystemSecret/useToken';

import { AuthContext } from './AuthProvider';

const SignUp = () => {
 const {user, signUp, googleLogin, updateUser}=useContext(AuthContext)
 const provider = new GoogleAuthProvider()
 const [error, setError]=useState('')
 
 const navigete = useNavigate()
 const [createEmail, setCreateEmail] = useState('')
 const { register, handleSubmit, formState: { errors } } = useForm();
 const [token]=useToken(createEmail)

 if(token){
  navigete('/')
 }
 const handleSignup = (data)=>{
  console.log(data)
  const profile = {
   displayName:data.name
  }
signUp(data.email, data.password)
.then(result=>{
 const user =result.user
 console.log(user)
 updateUser(profile)
 .then(()=>{
  usersData(data)

 })
 .catch(error=>console.error(error))
})
.catch(error=>{
 console.error(error)
 setError(error.message)
})
 }
 const handleProvider =()=>{
  googleLogin(provider)
  .then(result=>{
   const user =result.user
   console.log(user)
  //  setCreateEmail(user?.email)
  })
  .catch(error=>console.error(error))
 }
const usersData =(data)=>{
  const users = {
    name:data.name,
    email:data.email,
    user: data.user
  
   }
   console.log(users)
  
   fetch('http://localhost:5000/users',{
    method: 'POST',
    headers:{
      'content-type' : 'application/json'
    },
    body: JSON.stringify(users)
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    setCreateEmail(users.email)
   })
   .then(err=>{
    console.log(err)
   })
  
}
//  const check = (event)=>{
//   console.log(event.)
//  }
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
<div>
  <h3 className='text-xl text-accent'>Please Selected Seller and Buyer</h3>
<input  {...register("user", { required: 'Checked box  Select' })} type="radio" value="seller" /> <span className='text-info font-bold'>Seller</span> <br/>
      <input {...register("user", { required: 'Checked box  Select' })} type="radio" value="buyer" /> <span className='text-info font-bold'>Buyer</span>
      {errors.user && <p className='text-red-600'>{errors.user?.message}</p>}
</div>

        <input className='w-full btn btn-accent mt-8' type="submit" />
  
        <span className="label-text text-center">Alredy have a Account?<Link to='/login' className='text-info'>Login Now</Link></span>
        <p className='text-red-600'>{error}</p>
        
      </form>
      
      <div className='divider'>OR</div>
      <button onClick={handleProvider} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
  </div>
    </div>
 );
};

export default SignUp;