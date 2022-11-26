import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AccountMange/AuthProvider';
import Loading from '../Private/Loading';


const Dashboard = () => {
  const {user}=useContext(AuthContext)

  const {data: userProduct = [], isLoading} = useQuery({
    queryKey: ['userInfo'],
    queryFn: async ()=>{
      const res = await fetch(`http://localhost:5000/userInfo?email=${user?.email}`,{
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
     
     {
      userProduct.map((product, i)=><tr className="hover">
      <th>{i+1}</th>
      <td>{product.bookName}</td>
      <td>{product.email}</td>
      <td>{product.addressInfo}</td>
      <td>{product.date}</td>
      <td>{product.price}</td>
      <td><button className='btn btn-xs btn-primary'>Pay</button></td>
    </tr>)
     }
    
   </tbody>

  </table>
</div>
  </div>
 );
};

export default Dashboard;