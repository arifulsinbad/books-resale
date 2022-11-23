import React from 'react';

const Catagory = ({catagory}) => {
 const {name, details, catagory: counts, img, bg} = catagory;
 return (
  <div>
<div className={`flex ${bg}  shadow-xl rounded-lg border mt-5 mb-24`}>
  <figure><img src={img} alt="Movie" className='w-40 m-3'/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <p>Catagories : {counts}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Collect Now</button>
    </div>
  </div>
</div>
  </div>
 );
};

export default Catagory;