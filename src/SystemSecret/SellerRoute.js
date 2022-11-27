import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AccountMange/AuthProvider';
import Loading from '../Private/Loading';
import useSeller from './useSeller';



const SellerRoute = ({children}) => {
const {user, loading} = useContext(AuthContext)
const [isSeller, isLoading]=useSeller(user?.email)
const location = useLocation()
if(loading || isLoading){
 return <Loading></Loading>
}
if(user && isSeller){
 return children;
}
return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;