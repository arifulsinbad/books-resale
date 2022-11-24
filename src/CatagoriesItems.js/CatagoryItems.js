import React from 'react';

const CatagoryItems = ({date}) => {
 return (
  <div>
   <div>
   <p className='text-3xl text-info font-bold text-center'>You have a selected date on: {date}</p>
   </div>
  </div>
 );
};

export default CatagoryItems;