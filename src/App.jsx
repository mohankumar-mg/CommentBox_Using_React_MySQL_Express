import React from 'react';
import PlatForm from "./PlatForm";

function App() {

  return (
    <div>
      <h1 className='text-blue-800 text-4xl text-center pt-[28px] font-comic-sans'>This is a Comment Box!</h1>
      <h3 className='text-orange-600 text-xl italic text-center pl-[20%] font-mono pt-2 animate-pulse'>- Made with React and MySQL</h3>
      <PlatForm />
    </div>
  );
}

export default App;
