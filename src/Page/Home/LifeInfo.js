import React from 'react';
import know2 from '../../images/know2.jpeg'
const LifeInfo = () => {
 return (
  <div>
   <div className="hero  bg-base-200">
  <div className="hero-content flex-col  lg:flex-row">
    <img src={know2} alt='' className=" rounded-lg shadow-2xl w-1/2" />
    <div className='w-1/2 mx-6'>
      <h1 className="text-5xl font-bold">The World Best Man </h1>
      <p className="py-6">আমি কি ভেবে দেখেছি আমার জন্য এখন কাঁদছে একটি মহান মানুষ, যিনি কখন মিথ্যা 
      কথা বলেনি, যার জন্য সারা ভ্রমন্ডল পাগল, এই সব কিছু সৃষ্টি কারি স্রষ্টা পাগল, সেই তিনি কিনা আমার জন্য কাঁদছে, আমার সব ধরনের অনন্যায় অত্যাচার দুঃখ কষ্ট ভোগ করে গিয়েছে,আমি কি ভুলে যাচ্ছি সেই মহান মানুষ এর কথা, আর কে আছে আমাকে এতোটা ভালবাসবে ।     </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  </div>
 );
};

export default LifeInfo;