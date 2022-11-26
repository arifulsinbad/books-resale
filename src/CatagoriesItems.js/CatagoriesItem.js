import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import CatagoryItems from './CatagoryItems';
import ProductModal from './ProductModal';
import { useQuery } from '@tanstack/react-query';
import AddProducts from './AddProducts';
const CatagoriesItem = () => {
  const products = useLoaderData()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [modal, setModal]=useState('')
//   const [addPd, setAddPd] = useState({})

//  console.log(addPd)
 const {catagory} = products
const date = format(selectedDate, 'PP')
const {data: addProduct = []} = useQuery({
  queryKey:['addProduct'],
  queryFn: async ()=>{
    const res = await fetch('http://localhost:5000/addProduct');
    const data = await res.json();
    return data;
  }
})


console.log(addProduct)
const handleModal= (data)=>{
  setModal(data)
}

 return (
  <div>
    <div>

    </div>
   <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://img.freepik.com/premium-photo/old-university-shelves-culture-concept_136875-464.jpg?w=2000" alt='' className="w-1/3 rounded-lg shadow-2xl" />
    <div>
      <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      />
      <p>You have a selected date : {date}</p>
    </div>
  </div>
</div>
<div>
<p className='text-3xl text-info font-bold text-center mt-9 mb-9'>You have a selected date on: {date}</p>
</div>
<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-14 mt-7 mb-24 w-11/12 mx-auto'>
 {
  catagory.map(product =><CatagoryItems key={product.id} product={product}  date={date} handleModal={handleModal}></CatagoryItems>)
 }
{products.length ||
  addProduct?.map(addPD=><AddProducts key={addPD._id} addPD={addPD} products={products} handleModal={handleModal}></AddProducts>)
}
 
</div>
<div>
  
    <ProductModal modal={modal} date={date}></ProductModal>


</div>
<div>

</div>
  </div>
 );
};

export default CatagoriesItem;