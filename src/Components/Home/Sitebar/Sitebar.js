import { Button, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Sitebar = () => {
    const [travels, setTravels] = useState([]);
    useEffect(() => {
        fetch('https://hidden-plains-90674.herokuapp.com/travels')
            .then(res => res.json())
            .then(data => setTravels(data))

    }, [])
    const post = travels?.filter(top => top?.role === true);
    const topRating = post?.filter(top => top?.rating === 5);

    return (
        <div >
            <h1 className=' text-3xl  text-center pt-4  font-bold border-b mb-3'>Top travel </h1>
            <div className=' flex justify-center  overflow-y-auto max-h-screen scroll-b' >
                <div>
                    {
                        topRating?.reverse()?.map(topBlog =>

                            <div key={topBlog?._id} className="max-w-sm w-full py-6  cursor-pointer">
                                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                                    <div className=" bg-center h-56 " >
                                        <div className="flex justify-end">
                                            <img src={topBlog?.img} alt="" />
                                        </div>
                                    </div>
                                    <div className=" p-6 mt-10 flex justify-between">
                                        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{topBlog?.title}</p>
                                        <p className="text-3xl text-red-500">${topBlog?.price}</p>

                                    </div>
                                    <div className="flex p-4 border-t border-gray-300 text-gray-700 justify-between">
                                        <Link to={`travelsDetails/${topBlog?._id}`}><Button>Details</Button></Link>
                                        <Rating

                                            value={topBlog?.rating}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </div>

                                </div>
                            </div>
                        )
                    }

                </div>
            </div>


        </div>
    );
};

export default Sitebar;