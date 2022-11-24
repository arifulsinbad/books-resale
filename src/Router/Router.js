import Login from "../AccountMange/Login";
import SignUp from "../AccountMange/SignUp";
import CatagoriesItem from "../CatagoriesItems.js/CatagoriesItem";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Home from "../Page/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");


const router = createBrowserRouter([
 {
  path:'/', element:<Main></Main>,
  children:[
   {
    path:'/', element:<Home></Home>
   },
   {
    path:'/catagoriesItem/:catagory_id', element:<CatagoriesItem></CatagoriesItem>,
    loader:({params})=>fetch(`books.json/${params.id}`)
   },
   {
    path:'/login', element:<Login></Login>
   },
   {
    path:'/signUp', element:<SignUp></SignUp>
   }
 
  ]
 },
 {
  path:'/dashboardLayout', element:<DashboardLayout></DashboardLayout>,
  
 }
]);
export default router;