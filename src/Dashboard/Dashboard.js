import React from 'react';
import MyCatagory from './MyCatagory';

const Dashboard = () => {
 return (
  <div>
   <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Pay</th>
      </tr>
    </thead>

    <tbody>
     
     
     
     <tr className="hover">
       <th>2</th>
       <td>Hart Hagerty</td>
       <td>Desktop Support Technician</td>
       <td>Purple</td>
     </tr>
    
   </tbody>

  </table>
</div>
  </div>
 );
};

export default Dashboard;