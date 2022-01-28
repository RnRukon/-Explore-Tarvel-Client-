import { Button, Rating } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
// import Rating from '@material-ui/lab/Rating';

const Travelers = () => {
    const [travels, setTravels] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    useEffect(() => {
        fetch('https://hidden-plains-90674.herokuapp.com/travels')
            .then(res => res.json())
            .then(data => setTravels(data))

    }, [])

    const managePost = travels?.filter(travel => travel?.role === true);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = managePost.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section className="text-gray-600">

            <div className="max-w-6xl mx-auto">
                <div className=" flex justify-around flex-wrap">
                    {
                        currentPosts?.reverse()?.map(travel =>

                            <div key={travel?._id} className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3 cursor-pointer">
                                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                                    <div className=" overflow-hidden " >
                                        <div style={{ height: '200px' }} className="flex justify-end w-full">
                                            <img className=' w-full' src={travel?.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between">
                                        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{travel?.title}</p>
                                        <p className="text-3xl text-red-500">${travel?.price}</p>

                                    </div>
                                    <div className="flex p-4 border-t border-gray-300 text-gray-700 justify-between">
                                        <Link to={`travelsDetails/${travel?._id}`}><Button>Details</Button></Link>
                                        <Rating

                                            value={travel?.rating}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </div>

                                </div>
                            </div>

                        )
                    }
                </div>
                <div className=' flex justify-center mb-3'>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={managePost?.length}
                        paginate={paginate}
                    ></Pagination>
                </div>
            </div>

        </section>
    );
};

export default Travelers;