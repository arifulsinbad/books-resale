import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({catagory}) => {
 const {name, details, catagory: catagories, img, bg, views, catagory_id} = catagory;
 return (
  <div>
<div className={`flex ${bg}  shadow-xl rounded-lg border mt-5 mb-24`}>
  <figure><img src={img} alt="Movie" className='w-40 m-3'/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className='flex justify-between'>
    <p>Catagories : {catagories.length}</p>
    <p>Views : {views}</p>
    </div>
    <div className="card-actions justify-end">
      <Link to={`/catagoriesItem/${catagory_id}`}><button className="btn btn-primary">Collect Now</button></Link>
    </div>
  </div>
</div>
  </div>
 );
};

export default Catagory;