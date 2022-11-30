import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AccountMange/AuthProvider';
import Loading from '../Private/Loading';

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const imgHostKey = process.env.REACT_APP_apiKey_IMGBB;
  // console.log(imgHostKey)


  const { data: spacialties, isLoading } = useQuery({
    queryKey: ['spacialty'],
    queryFn: async () => {
      const res = await fetch('https://books-market-arifulsinbad.vercel.app/productSpacialty', {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      const data = await res.json();
      return data;

    }
  })
  if (isLoading) {
    return <Loading></Loading>
  }
  const handleAdd = (data) => {
    // console.log(data.img[0])
    const image = data.img[0];
    const body = new FormData();
    body.append('image', image);
    // console.log(image)
    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: 'POST',
      body
    })
      .then(res => res.json())
      .then(imgData => {
        //  console.log(imgData)
        if (imgData.success) {
          console.log(imgData)
          navigate('/dashboardLayout/myProducts')
          alert('Add Success')
          const productInfo = {
            name: data.name,
            details: data.details,
            price: data.price,
            location: data.location,
            email: user?.email,
            spacialty: data.spacialty,
            img: imgData.data.url,
            number: data.number,
            type: data.type
          }
          console.log(productInfo)
          fetch('https://books-market-arifulsinbad.vercel.app/addProduct', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(productInfo)
          })
        }
      })
  }


  return (
    <div className='w-1/2 mx-auto mb-11'>
      <form onSubmit={handleSubmit(handleAdd)} >


        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Name</span>

          </label>
          <input type='text' {...register('name', {
            required: 'Name Required'
          })} className="input input-bordered w-full " />
          {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}



        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Details</span>

          </label>
          <input type='text' {...register('details', {
            required: 'Details Required'
          })} className="input input-bordered w-full " />
          {errors.details && <p className='text-red-600'>{errors.details?.message}</p>}



        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Location</span>

          </label>
          <input type='text' {...register('location', {
            required: 'Location Required'
          })} className="input input-bordered w-full " />
          {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}



        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Price</span>

          </label>
          <input type='text' {...register('price', {
            required: 'Price Required'
          })} className="input input-bordered w-full " />
          {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}



        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Number</span>

          </label>
          <input type='number' {...register('number', {
            required: 'Number Required'
          })} className="input input-bordered w-full " />
          {errors.number && <p className='text-red-600'>{errors.number?.message}</p>}



        </div>
        {/* <div className="form-control w-full ">
 <label className="label">
   <span className="label-text">Email</span>

 </label>
 <input defaultValue={user?.email} disabled type='email' {...register('email',{
  required:"Email Required"
 })}  className="input input-bordered w-full " />

  


</div> */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Spacialty</span>

          </label>
          <select {...register('spacialty', {
            required: "Spacialty Required"
          })} className="select select-bordered w-full">
            {
              spacialties.map(spacialty => <option>{spacialty.name}</option>)
            }
          </select>
          {errors.spacialty && <p className='text-red-600'>{errors.spacialty?.message}</p>}


        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Condition Type</span>

          </label>
          <select {...register('type', {
            required: "Condition type Required"
          })} className="select select-bordered w-full">
           <option>Excelent</option>
           <option>Good</option>
           <option>Fair</option>
          </select>
          {errors.type && <p className='text-red-600'>{errors.type?.message}</p>}


        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Image</span>

          </label>
          <input type='file' {...register('img', {
            required: "file Required"
          })} className="input input-bordered w-full py-10" />
          {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}



        </div>
        <button className='w-full btn btn-accent mt-8'>POST PRODUCT</button>

      </form>
    </div>
  );
};

export default AddProduct;