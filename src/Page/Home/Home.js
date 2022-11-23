import React from 'react';
import Banner from './Banner';
import Catagories from './Catagories/Catagories';


const Home = () => {
 return (
  <div className='w-11/12 mx-auto'>
  <Banner></Banner>
<Catagories></Catagories>
  </div>
 );
};

export default Home;