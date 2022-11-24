import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import CatagoryItems from './CatagoryItems';
const CatagoriesItem = () => {
 const items = useLoaderData()
const [selectedDate, setSelectedDate] = useState(new Date())
 // console.log(items)
const date = format(selectedDate, 'PP')
 return (
  <div>
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
 <CatagoryItems date={date}></CatagoryItems>
</div>
  </div>
 );
};

export default CatagoriesItem;