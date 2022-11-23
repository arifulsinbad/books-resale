import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
 return (
  <div className='mt-14 mb-14  rounded-md'>
   <div className="hero rounded-md " style={{ backgroundImage: `url(${banner})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Islamic Books Collection</h1>
      <p className="mb-5 w-1/2 mx-auto">Islamic holy books are the texts which Muslims believe were authored by Allah through various prophets throughout humanity's history.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  </div>
 );
};

export default Banner;