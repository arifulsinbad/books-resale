import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AccountMange/AuthProvider';
import Navbar from '../Layout/Navbar';
import UseAdmin from '../SystemSecret/UseAdmin';
import useSeller from '../SystemSecret/useSeller';

const DashboardLayout = () => {
  const {user}=useContext(AuthContext)
const [isAdmin]=UseAdmin(user?.email)
const [isSeller]=useSeller(user?.email)

 return (
  <div>
   <Navbar></Navbar>
   <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    
      <li><Link to='/dashboardLayout'>My Orders</Link></li>
      {
       isSeller && <li><Link to='/dashboardLayout/myProducts'>My Prodects</Link></li>
      }
     {
      isAdmin &&  <li><Link to='/dashboardLayout/allUser'>All User</Link></li>
     }
     {
      isAdmin &&  <li><Link to='/dashboardLayout/allSeller'>All Seller</Link></li>
     }
     {
      isAdmin &&  <li><Link to='/dashboardLayout/allBuyer'>All Buyer</Link></li>
     }
     {
      isSeller &&  <li><Link to='/dashboardLayout/MyBuyer'>My Buyer</Link></li>
     }
      {
       isSeller && <li><Link to='/dashboardLayout/addProduct'>Add Procduct</Link></li>
      }
      {
       isAdmin && <li><Link to='/dashboardLayout/report'>Report</Link></li>
      }
    </ul>
  
  </div>
</div>
  </div>
 );
};

export default DashboardLayout;