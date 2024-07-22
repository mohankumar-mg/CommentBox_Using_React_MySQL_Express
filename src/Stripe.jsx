import React from 'react';

function Stripe() {
  return (
    <div>
      <div className='flex justify-start pt-[10px]'>
            <div className='w-[80px] h-[20px] bg-cyan-500 mr-[10px] flex flex-col justify-around'></div>
            <div className='w-[20px] h-[20px] bg-green-500 rounded-full'></div>
        </div>
        <div className='flex justify-start pt-[7px]'>
            <div className='w-[80px] h-[20px] bg-cyan-500 mr-[10px] flex flex-col justify-around'></div>
            <div className='w-[20px] h-[20px] bg-white rounded-full'></div>
        </div>
    </div>
  );
}

export default Stripe;
