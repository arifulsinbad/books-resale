import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Private/Loading';

const AllUser = () => {

  const {data: users = [], isLoading, refetch} = useQuery({
    queryKey:['users'],
    queryFn: async ()=>{
      const res = await fetch('https://books-market-arifulsinbad.vercel.app/users',{
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
      });
      const data = await res.json();
      return data;
    }
  })
  
const handleAdmin = (id)=>{
  fetch(`https://books-market-arifulsinbad.vercel.app/users/admin/${id}`,{
    method: 'PUT',
    headers:{
      authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res => res.json())
  .then(data=>{
    console.log(data)
    if(data.modifiedCount > 0){
      alert('Admin Create Success')
      refetch()
    }
  })
  .catch(err=>{
    console.log(err)
  })
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
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>

    <tbody>
     
     
     {
      users.map((user, i)=><tr className="hover">
      <th>{i+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {
          user.role !== 'admin' && <button onClick={()=>handleAdmin(user._id)} className='btn btn-xs btn-info'>Make Admin</button>
        }
      </td>
      <td>
        <button  className='btn btn-xs btn-error'>Delete</button>
      </td>
    </tr>)
     }
     
    
   </tbody>

  </table>
</div>
  </div>
 );
};

export default AllUser;