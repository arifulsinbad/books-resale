import Login from "../AccountMange/Login";
import SignUp from "../AccountMange/SignUp";
import CatagoriesItem from "../CatagoriesItems.js/CatagoriesItem";
import AddProduct from "../Dashboard/AddProduct";
import AllBuyer from "../Dashboard/AllBuyer";
import AllSeller from "../Dashboard/AllSeller";
import AllUser from "../Dashboard/AllUser";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Dashboard/DashboardLayout";
import MyBuyer from "../Dashboard/MyBuyer";
import MyProducts from "../Dashboard/MyProducts";
import ReportModal from "../Dashboard/ReportModal";
import Reports from "../Dashboard/Reports";
import DispalyError from "../DisplayError/DispalyError";
import Advertisement from "../Page/Home/Advertisement";

import Home from "../Page/Home/Home";
import Payments from "../Payment/Payments";
import AdminRoute from "../SystemSecret/AdminRoute";
import SellerRoute from "../SystemSecret/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");


const router = createBrowserRouter([
 {
  path:'/', element:<Main></Main>,
  errorElement:<DispalyError></DispalyError>,
  children:[
   {
    path:'/', element:<Home></Home>
   },
   {
    path:'/catagoriesItem/:id', element:<CatagoriesItem></CatagoriesItem>,
    loader:({params})=>{
     return fetch(`https://books-market-smoky.vercel.app/products/${params.id}`)}
   },
   {
    path:'/login', element:<Login></Login>
   },
   {
    path:'/signUp', element:<SignUp></SignUp>
   },
//   {
// path:'/advertisement/:id',  element:<Advertisement></Advertisement>,
// loader: ({params})=>{
//   return fetch(`https://books-market-smoky.vercel.app/addProduct/${params.id}`)
// } 
//   }
 
  ]
 },
 {
  path:'/dashboardLayout', element:<DashboardLayout></DashboardLayout>,
  errorElement:<DispalyError></DispalyError>,
  children: [
   {
    path:'/dashboardLayout', element:<Dashboard></Dashboard>
   },
   {
    path:'/dashboardLayout/allUser', element:<AdminRoute><AllUser></AllUser></AdminRoute>
   },
   {
    path:'/dashboardLayout/allSeller', element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
   },
   {
    path:'/dashboardLayout/allBuyer', element:<AdminRoute><AllBuyer></AllBuyer></AdminRoute>
   },
   {
    path:'/dashboardLayout/MyBuyer', element:<SellerRoute><MyBuyer></MyBuyer></SellerRoute>
   },
   {
    path:'/dashboardLayout/addProduct', element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
   },
   {
    path:'/dashboardLayout/payments/:id', element:<Payments></Payments>,
    loader: ({params})=>{
      return fetch(`https://books-market-smoky.vercel.app/userInfo/${params.id}`)
    }
   },
   {
    path:'/dashboardLayout/myProducts', element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
   },
   {
    path:'/dashboardLayout/report', element:<AdminRoute><Reports></Reports></AdminRoute>
   }
  ]
 }
]);
export default router;