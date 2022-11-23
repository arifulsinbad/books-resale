import React from 'react';
import logo1 from '../../../images/logo/logo1.png'
// import logo2 from '../../../images/logo/logo2.png'
import logo3 from '../../../images/logo/logo3.jpg'
import Catagory from './Catagory';

const Catagories = () => {
 const catagory = [
  {
   _id: 1,
   name: 'Quran Mazid',
   details: 'Different types of Quran majeed Translation collection',
   catagory: '3',
   img: logo1,
   bg:'bg-accent'
  },
  {
   _id: 2,
   name: 'Hadis Books',
   details: 'Different types of Hadis Books collection',
   catagory: '3',
   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Muhammad2.svg/800px-Muhammad2.svg.png",
   bg: 'bg-orange-300'
  },
  {
   _id: 3,
   name: 'Biography Books',
   details: 'Different types of Biography Books collection',
   catagory: '3',
   img: logo3,
   bg:'bg-light'
  }
 ]
 return (
  <div>
   <h1 className='text-4xl font-bold text-center text-gray-600'>Books Catagories</h1>
   <div className='divider'>Collect</div>
   <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7'>
{
 catagory.map(catagory=><Catagory key={catagory._id} catagory={catagory}></Catagory>)
}
   </div>
  </div>
 );
};

export default Catagories;