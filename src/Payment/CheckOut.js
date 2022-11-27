import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CheckOut = ({userInfo}) => {

const [cardError, setCardError] = useState('')
const [success, setSuccess] = useState('')
const [transaction, setTransaction] = useState('')
const [clientSecret, setClientSecret] = useState("");
const [processing, setProccessing] = useState(false)
const stripe = useStripe()
const elements = useElements()
const {price, userName, email, _id} = userInfo;
// console.log(userInfo)


useEffect(() => {
  // Create PaymentIntent as soon as the page loads
  fetch("http://localhost:5000/create-payment-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({price}),
  })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));
}, [price]);

const handleSubmit = async(event)=>{
  event.preventDefault();
  if(!stripe || !elements){
    return;
  }

  const card = elements.getElement(CardElement);
  if (card === null) {
    return
  }
  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card
  });
  if(error){
    console.log(error)
    setCardError(error.message)
  }
  else{
    setCardError('')
  }
  setSuccess('')
  setCardError(true)
  const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        name: userName,
        email: email
      },
    },
  })
 if(confirmError){
  setCardError(confirmError.message)
  return;
 }
if(paymentIntent.status === 'succeeded'){
const payment = {
price,
transactionId: paymentIntent.id,
email,
userName,
bookingId:_id
}
fetch('http://localhost:5000/payments',{
  method: 'POST',
  headers:{
    'content-type' : 'application/json',
    authorization: `bearer ${localStorage.getItem('accessToken')}`
  },
  body: JSON.stringify(payment)
})
.then(res=>res.json())
.then(data=>{
  if(data.insertedId){
    setSuccess('Congrats! your payment completed')
    setTransaction(paymentIntent.id)
  }
})
.catch(err=>console.log(err))

}
setProccessing(false)
console.log(paymentIntent)
 
}


 return (
<>
<form onSubmit={handleSubmit}>
  <CardElement
    options={{
      style: {
        base: {
          fontSize: '20px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }}
  />
  <p className='text-error mt-5 font-bold'>{cardError}</p>
  {
  success && <div>
    <p className='text-green-500 mt-5 font-bold'>{success}</p>
<p className='text-gray-500 mt-5 font-bold'> Your Transaction Id : {transaction}</p>
  </div>
}
  <button className='btn btn-info text-lg btn-outline w-28  mt-36  mb-3'  type="submit" disabled={!stripe || !clientSecret || processing}>
    Pay
  </button>
</form>


</>
 );
};

export default CheckOut;