import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({catagory}) => {
 const {name, details, img, bg, views, _id} = catagory;
 return (
  <div>
<div className={`flex ${bg}  shadow-xl rounded-lg border mt-5 mb-24`}>
  <figure><img src={img} alt="Movie" className='w-40 m-3'/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className='flex justify-between'>
    
    <p>Views : {views}</p>
    </div>
    <div className="card-actions justify-end">
      <Link to={`/catagoriesItem/${_id}`}><button className="btn btn-primary">Collect Now</button></Link>
    </div>
  </div>
</div>
  </div>
 );
};

export default Catagory;