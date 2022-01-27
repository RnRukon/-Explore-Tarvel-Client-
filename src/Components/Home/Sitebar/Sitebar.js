import { Rating } from '@mui/material';
import React from 'react';

const Sitebar = () => {
    return (
        <div >
            <h1 className=' text-3xl  text-center pt-4  font-bold border-b mb-3'>Top travel </h1>
            <div className=' flex justify-center  overflow-y-auto max-h-screen  scroll-b' >
                <div>
                    <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
                        <img className="w-full h-48"
                            src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
                            alt="product" />
                        <div className="px-6 flex justify-between">
                            <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                            <p className="leading-normal text-gray-700">Total Cost: $155</p>

                        </div>
                        <hr />
                        <div className='px-6 flex justify-between py-3'>
                            <p>Location</p>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />

                        </div>
                    </div>
                    <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
                        <img className="w-full h-48"
                            src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                            alt="product" />


                        <div className="px-6 flex justify-between">
                            <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                            <p className="leading-normal text-gray-700">Total Cost: $155</p>

                        </div>
                        <hr />
                        <div className='px-6 flex justify-between py-3'>
                            <p>Location</p>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />

                        </div>
                    </div>
                    <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
                        <img className="w-full h-48"
                            src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                            alt="product" />


                        <div className="px-6 flex justify-between">
                            <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                            <p className="leading-normal text-gray-700">Total Cost: $155</p>

                        </div>
                        <hr />
                        <div className='px-6 flex justify-between py-3'>
                            <p>Location</p>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Sitebar;