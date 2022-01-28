import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='mt-64 text-center'>
            <h1 className=' text-4xl text-cyan-700'>Explore Travel</h1>
            <h1>Note Found</h1>

            <h1 className='text-8xl'>4<span className='text-red-600'>0</span>4</h1>
            <Link to='/'>
                <button className="  bg-slate-500 hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded-full">Back</button>
            </Link>
        </div>
    );
};

export default NotFound;