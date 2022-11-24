import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const loginSubmit= (data)=>{
  console.log(data)
 }
 return (
  <div>
    <form onSubmit={handleSubmit(loginSubmit)}>
      <label htmlFor="name">Name</label>
      <input id="name" {...register('name', { required: true, maxLength: 30 })} />
      {errors.name && errors.name.type === "required" && <span>This is required</span>}
      {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
      <input type="submit" />
    </form>
  </div>
 );
};

export default Login;