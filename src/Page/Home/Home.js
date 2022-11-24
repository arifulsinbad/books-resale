import React from 'react';
import Banner from './Banner';
import Catagories from './Catagories/Catagories';
import IslamicInfo from './IslamicInfo';
import LifeInfo from './LifeInfo';


const Home = () => {
 return (
  <div className=''>
  <Banner></Banner>
<Catagories></Catagories>
<IslamicInfo></IslamicInfo>
<LifeInfo></LifeInfo>
  </div>
 );
};

export default Home;