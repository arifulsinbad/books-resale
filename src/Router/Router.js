import CatagoriesItem from "../CatagoriesItems.js/CatagoriesItem";
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
    path:'/catagoriesItem/:id', element:<CatagoriesItem></CatagoriesItem>,
    loader:({params})=>fetch(`books.json${params.id}`)
   }
 
  ]
 }
]);
export default router;