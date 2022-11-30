import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../SystemSecret/useToken';
import { AuthContext } from './AuthProvider';

const Login = () => {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const [error, setError]=useState('')
 const {user, login, googleLogin}=useContext(AuthContext)
 const provider = new GoogleAuthProvider()
 const location = useLocation()
 const navigate = useNavigate()
 const [createEmail, setCreateEmail] = useState('')
 const [token]=useToken(createEmail)
 const from = location.state?.from?.pathname || '/'
 console.log(createEmail)
 if(token){
  navigate(from, {replace: true})
 }
 const handleLogin= (data)=>{
  console.log(data)
  login(data.email, data.password)
  .then(result=>{
    const user = result.user
   setCreateEmail(data.email)
    console.log(user)
  })
  .catch(error=>{
    console.error(error)
    setError(error.message)
  })
 }
 const googleProvider=()=>{
  googleLogin(provider)
  .then(result=>{
    const users = result.user
    const userData = {
      name: users?.displayName,
      email: users?.email
    }
  
  providerData(userData)
    console.log(user)
  //  localStorage.setItem('accessToken', user?.accessToken)
  })
  .catch(error=>console.error(error))
 }

 const providerData =(providers)=>{
  

 
  fetch('https://books-market-arifulsinbad.vercel.app/users',{
   method: 'POST',
   headers:{
     'content-type' : 'application/json',
     authorization: `bearer ${localStorage.getItem('accessToken')}`
     
   },
   body: JSON.stringify(providers)
  })
  .then(res=>res.json())
  .then(data=>{
   console.log(data)
   setCreateEmail(providers.email)
  })
  .then(err=>{
   console.log(err)
  })
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
      <input className='w-full btn btn-accent mt-8' type="submit" value='Login'/>

      <span className="label-text text-center">Nxew to Doctors Portal?<Link to='/signup' className='text-info'>Create new Account</Link></span>
      <p className='text-red-600'>{error}</p>
    </form>
    <div className='divider'>OR</div>
    <button onClick={googleProvider} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
</div>
  </div>
 );
};

export default Login;