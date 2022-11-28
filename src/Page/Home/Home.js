import React from 'react';
import Advertisement from './Advertisement';

import Banner from './Banner';
import Catagories from './Catagories/Catagories';
import IslamicInfo from './IslamicInfo';
import LifeInfo from './LifeInfo';


const Home = () => {
 return (
  <div className=''>
  <Banner></Banner>
<Catagories></Catagories>
<Advertisement></Advertisement>
<IslamicInfo></IslamicInfo>
<LifeInfo></LifeInfo>
  </div>
 );
};

export default Home;