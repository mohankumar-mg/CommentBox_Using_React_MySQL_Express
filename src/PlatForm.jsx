import React from 'react';
import Stripe from "./Stripe";
import Form from "./Form";

function PlatForm() {
  return (
    <div className='bg-gray-300 my-[40px] mx-[35%] w-[30%] h-[500px] rounded-2xl'>
        <h1 className='font-semibold text-center text-xl pt-[10px] font-serif text-cyan-700'>Enter Your Goal below 👇</h1>
        <Stripe />
        <br /><br />
        <Form />
    </div>
  );
}

export default PlatForm;
