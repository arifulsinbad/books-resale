import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AccountMange/AuthProvider';
import Loading from '../Private/Loading';

import UseAdmin from './UseAdmin';

const AdminRoute = ({children}) => {
const {user, loading} = useContext(AuthContext)
const [isAdmin, isLoading]=UseAdmin(user?.email)
const location = useLocation()
if(loading || isLoading){
 return <Loading></Loading>
}
if(user && isAdmin){
 return children;
}
return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;