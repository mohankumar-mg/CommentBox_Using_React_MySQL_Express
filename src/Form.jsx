import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/submit', {name, goal})
        .then(res => {
            alert(res.data);
            setName('');
            setGoal('');
        })
        .catch(err => {
            console.error('There was an error submitting form ! ' + err);
        });
    };

    return (
        <div className='my-[10px] mx-[25%] w-[50%] flex flex-row justify-center items-center'>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='rounded-xl w-[250px] h-[30px] pl-[15px] mb-[25px] shadow-lg shadow-cyan-500/50'
                        placeholder='Name'
                    />

                    {/* Use textarea for multiline input */}
                    <textarea
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className='rounded-xl w-[250px] h-[130px] pt-[10px] pl-[15px] mb-[10px] shadow-lg shadow-blue-500/50 resize-none' // Add resize-none to prevent resizing
                        placeholder='Goal...'
                    />

                    <button type="submit" class="bg-cyan-500 shadow-lg shadow-cyan-500/50 w-[100px] h-[40px] rounded-2xl mt-[10px] ml-[23%] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
