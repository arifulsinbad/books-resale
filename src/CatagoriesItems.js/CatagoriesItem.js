import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import CatagoryItems from './CatagoryItems';
import ProductModal from './ProductModal';
import { useQuery } from '@tanstack/react-query';
import AddProducts from './AddProducts';
import { AuthContext } from '../AccountMange/AuthProvider';
const CatagoriesItem = () => {
  const products = useLoaderData()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [modal, setModal]=useState('')
  
//   const [addPd, setAddPd] = useState({})

//  console.log(addPd)
//  const {catagory} = products
 
const date = format(selectedDate, 'PP')

const {data: addProduct = []} = useQuery({
  queryKey:['addProduct'],
  queryFn: async ()=>{
    const res = await fetch('https://books-market-arifulsinbad.vercel.app/addProduct',{
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    });
    const data = await res.json();
    return data;
  }
})


// console.log(addProduct)
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
<div>
<h1 className='text-4xl text-info text-center font-bold mt-12 mb-14'>Seller Items Product</h1>
<div className='divider'>OR</div>

<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-14 mt-7 mb-24 w-11/12 mx-auto'>
{
  addProduct.map(addPD=> products.name === addPD.spacialty && <AddProducts key={addPD._id} addPD={addPD} products={products} handleModal={handleModal}></AddProducts>)
}
</div>
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