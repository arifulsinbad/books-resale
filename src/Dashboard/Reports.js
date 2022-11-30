import { useQuery } from '@tanstack/react-query';
import { es } from 'date-fns/locale';
import React from 'react';
import Loading from '../Private/Loading';

const Reports = () => {

  const {data: users = [], isLoading, refetch} = useQuery({
    queryKey:['report'],
    queryFn: async ()=>{
      const res = await fetch('http://localhost:5000/report',{
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  })
const handleDelete = (id)=>{
  fetch(`http://localhost:5000/users/report/${id}`,{
    method: 'DELETE',
    headers:{
      authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.acknowledged){
      alert('Report accepted Product Delete Success')
      refetch()
     }
  })
  .catch(err=>console.log(err))
}
const handleDeleted = (id)=>{
  fetch(`http://localhost:5000/report/delete/${id}`,{
    method: 'DELETE',
    headers:{
      authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.acknowledged){
      alert('Report Delete Success')
      refetch()
     }
  })
  .catch(err=>console.log(err))
}

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
        <th>Name</th>
        <th>User Email</th>
        <th>Seller Email</th>
        <th>Report Subject</th>
        <th>Product Delete</th>
        <th>Delete</th>
      </tr>
    </thead>

    <tbody>
     
     
     {
      users.map((user, i)=><tr className="hover">
      <th>{i+1}</th>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.sellerEmail}</td>
      <td>{user.reportInfo}</td>
   
      <td>
        <button onClick={()=> handleDelete(user.productId)}  className='btn btn-xs btn-error'>Product Delete</button>
      </td>
      <td>
        <button onClick={()=> handleDeleted(user._id)}  className='btn btn-xs btn-error'>Delete</button>
      </td>
    </tr>)
     }
     
    
   </tbody>

  </table>
</div>
  </div>
 );
};

export default Reports;