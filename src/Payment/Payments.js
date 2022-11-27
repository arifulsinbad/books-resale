import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from './CheckOut';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_KEY);
const Payments = () => {
 const userInfo = useLoaderData()
 const {bookName: name, price, date, email, user} =userInfo;
 return (
  <div>
     <div>
<h3 className='text-3xl '>{name}</h3>
<p>Please pay <strong>${price} </strong>for your appointment on {date} at <strong>{email}</strong> </p>
<div className='mt-14 w-1/2  text-white pt-4 pl-4  rounded-xl ' style={{ backgroundImage: `url("https://i.pinimg.com/736x/ab/77/ec/ab77ecda703d165a70838cc232164999.jpg")` }}>
<Elements stripe={stripePromise}>
      <CheckOut userInfo={userInfo}/>
    </Elements>
</div>
  </div>
  </div>
 );
};

export default Payments;