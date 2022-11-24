import React from 'react';
import know1 from '../../images/know1.jpg'

const IslamicInfo = () => {
 return (
  <div>
   <div className="hero  bg-base-200 mb-14">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={know1} className=" rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl font-bold">Who created me?</h1>
      <p className="py-6">আমরা কি ভুলে যাচ্ছি কিসের জন্য দুনিয়াতে আসছি , কে আমাকে পাঠালো কেনই বা পাঠালও 
      আমি যা খাচ্ছি এই সব কি ভাবে আসছে , কি ভাবে আমি আসলাম , আমি কি ভুলে যাচ্ছি এটা সুখের যায়গা না ,আমি কি ভুলে যাচ্ছি পরকালের কথা যেখানে কন কষ্ট নেই ,আমি কি ভুলে যাচ্ছি আমার গন্তবর কথা! 
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  </div>
 );
};

export default IslamicInfo;