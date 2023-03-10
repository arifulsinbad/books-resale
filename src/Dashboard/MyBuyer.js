import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AccountMange/AuthProvider';
import Loading from '../Private/Loading';


const MyBuyer = () => {
  const {user}=useContext(AuthContext)
// console.log(user)
  const {data: userProduct = [], isLoading} = useQuery({
    queryKey: ['userInfo'],
    queryFn: async ()=>{
      const res = await fetch(`https://books-market-arifulsinbad.vercel.app/userInfo`,{
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      const data = await res.json();
      return data;
    }
  })
console.log(userProduct)
  if(isLoading){
    return <Loading></Loading>
  }
 return (
  <div>
   <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>Number</th>
        <th>Book Name</th>
        <th>Email</th>
        <th>Address Info</th>
        <th>Date</th>
        <th>Price</th>
        <th>Pay</th>
      </tr>
    </thead>

    <tbody>
     
     {userProduct.length &&
      userProduct.map((product, i)=>product.sellerEmail === user?.email && <tr className="hover">
      <th>{i+1}</th>
      <td>{product.bookName}</td>
      <td>{product.email}</td>
      <td>{product.addressInfo}</td>
      <td>{product.date}</td>
      <td>{product.price}</td>
      <td>
        {
          product.paid ? <p className='text-green-500 font-bold'>Paid</p> : <Link to={`/dashboardLayout/payments/${product._id}`}><button className='btn btn-xs btn-primary'>Pay</button></Link>
        }
      </td>
    </tr>)
     }
    
   </tbody>

  </table>
</div>
  </div>
 );
};

export default MyBuyer;