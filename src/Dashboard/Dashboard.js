import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AccountMange/AuthProvider';
import Loading from '../Private/Loading';
import ReportModal from './ReportModal';


const Dashboard = () => {
  const {user}=useContext(AuthContext)
  const [modal, setModal]=useState('')
console.log(user)
  const {data: userProduct = [], isLoading, refetch} = useQuery({
    queryKey: ['userProduct', user?.email],
    queryFn: async ()=>{
      const res = await fetch(`https://books-market-arifulsinbad.vercel.app/userInfo?email=${user?.email}`,{
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      const data = await res.json();
      return data;
    }
  })

  if(isLoading){
    return <Loading></Loading>
  }
const handleModal=(data)=>{
  setModal(data)
}
const handleDelete = (id)=>{
  fetch(`https://books-market-arifulsinbad.vercel.app/userInfo/delete/${id}`,{
    method: 'DELETE',
    headers:{
      authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.acknowledged){
      alert('Delete Success')
      refetch()
     }
  })
  .catch(err=>console.log(err))
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
        <th>Report</th>
        <th>Delete</th>
      </tr>
    </thead>

    <tbody>
     
     {userProduct.length &&
      userProduct?.map((product, i)=>product.email === user?.email && <tr className="hover">
      <th>{i+1}</th>
      <td>{product?.name}</td>
      <td>{product?.email}</td>
      <td>{product?.addressInfo}</td>
      <td>{product?.date}</td>
      <td>{product?.price}</td>
      
      <td>
        {
          product?.paid ? <p className='text-green-500 font-bold'>Paid</p> : <Link to={`/dashboardLayout/payments/${product?._id}`}><button className='btn btn-xs btn-primary'>Pay</button></Link>
        }
      </td>
      <td><label htmlFor="my-modal-3" onClick={()=> handleModal(product)} className="btn btn-xs ">Report</label></td>
      <td>
        <button onClick={()=> handleDelete(product?._id)}  className='btn btn-xs btn-error '>Delete</button>
      </td>
    </tr>)
     }
      
   </tbody>

  </table>
</div>
<ReportModal modal={modal}></ReportModal>
  </div>
 );
};

export default Dashboard;