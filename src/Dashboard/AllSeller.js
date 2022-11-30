import { useQuery } from '@tanstack/react-query';
import { es } from 'date-fns/locale';
import React from 'react';
import Loading from '../Private/Loading';

const AllSeller = () => {

  const {data: users = [], isLoading, refetch} = useQuery({
    queryKey:['users'],
    queryFn: async ()=>{
      const res = await fetch('http://localhost:5000/users',{
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  })
const handleVerify = (email)=>{
  fetch(`http://localhost:5000/users/verify/${email}`,{
    method: 'PUT',
    headers:{
      authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res => res.json())
  .then(data=>{
    console.log(data)
    if(data.modifiedCount > 0){
      alert('Verify Create Success')
      refetch()
    }
  })
  .catch(err=>{
    console.log(err)
  })
}
const handleDelete = (id)=>{
  fetch(`http://localhost:5000/users/delete/${id}`,{
    method: 'DELETE',
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
        <th>Email</th>
        <th>Seller Verified</th>
        <th>Delete</th>
      </tr>
    </thead>

    <tbody>
     
     
     {
      users.map((user, i)=>user.user === 'seller' && <tr className="hover">
      <th>{i+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {
          user.veryfied !== 'Veryfied' && <button onClick={()=>handleVerify(user.email)} className='btn btn-xs btn-info'>Make VeryFied</button>
        }
      </td>
      <td>
        <button onClick={()=> handleDelete(user._id)}  className='btn btn-xs btn-error'>Delete</button>
      </td>
    </tr>)
     }
     
    
   </tbody>

  </table>
</div>
  </div>
 );
};

export default AllSeller;