import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../AccountMange/AuthProvider';

const DispalyError = () => {
 const error = useRouteError()
 const {user, logOut}=useContext(AuthContext)
 const navigate = useNavigate()
const handleLogOut = () =>{
logOut()
.then(()=>{
navigate('/login')
})
.catch(error=>console.error(error))
}
 return (
  <div>
   <div className="hero min-h-screen" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/007/795/847/original/retro-sci-fi-futuristic-background-1980s-and-1990s-style-3d-illustration-digital-landscape-in-a-cyber-world-for-use-as-design-cover-free-vector.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-error">SOMETHING WENT WRONG!!!</h1>
      <p className="mb-5 text-warning text-xl font-semibold ">{error.statusText || error.message}</p>
      <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
    </div>
  </div>
</div>
  </div>
 );
};

export default DispalyError;