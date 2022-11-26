import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Private/Loading';

const AllUser = () => {

  const {data: users = [], isLoading} = useQuery({
    queryKey:['users'],
    queryFn: async ()=>{
      const res = await fetch('http://localhost:5000/users');
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
        <th>Name</th>
        <th>Email</th>
        <th>Make Admin</th>
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
        <button className='btn btn-xs btn-info'>Make Admin</button>
      </td>
      <td>
        <button className='btn btn-xs btn-error'>Delete</button>
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