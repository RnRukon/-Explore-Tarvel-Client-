import React, { useEffect, useState } from 'react';
import { Button, Rating } from '@mui/material';
import { Link } from "react-router-dom";
import axios from 'axios';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Pagination from '../../Home/Travelers/Pagination';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const UpdateTravels = () => {


    const [travels, setTravels] = useState([])
    const [open, setOpen] = React.useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    useEffect(() => {
        fetch('https://hidden-plains-90674.herokuapp.com/travels')
            .then(res => res.json())
            .then(data => setTravels(data) || '')
    }, [])



    const handleTravelsDelete = (id) => {
        window.confirm("Are you sure you wish to delete this item?") &&
            axios.delete(`https://hidden-plains-90674.herokuapp.com/travelDelete/${id}`)
                .then(res => res.data.deletedCount &&
                    fetch('https://hidden-plains-90674.herokuapp.com/travels')
                        .then(res => res.json())
                        .then(data => setTravels(data) || '')
                        .finally(() => {
                            setOpen(true);
                        })
                )


    }
    const managePost = travels?.filter(travel => travel.role === true);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = managePost.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };




    return (
        <div>
            <h1 className='text-pink-700 underline uppercase py-4 text-4xl font-bold text-center'>Update Product</h1>
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
                                <div className=' flex border-t justify-between px-4 items-center'>
                                    <Link to={`travelsDetails/${travel?._id}`}><Button>Details</Button></Link>
                                    <Rating

                                        value={travel?.rating}
                                        precision={0.5}
                                        readOnly
                                    />

                                </div>
                                <div className="flex p-4 border-t border-gray-300 text-gray-700 justify-between">


                                    <Link to={`updateTravelsFrom/${travel._id}`}>
                                        <Button sx={{ width: 100, p: 0 }} >Update</Button>
                                    </Link>
                                    <Button onClick={() => handleTravelsDelete(travel?._id)} sx={{ width: 100, p: 0 }} >Delete</Button>
                                </div>

                            </div>
                        </div>
                    )}

            </div>

            <div className=' flex justify-center mb-3'>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={managePost?.length}
                    paginate={paginate}
                ></Pagination>
            </div>
            <Stack spacing={2} sx={{ width: '100%' }}>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Delete success!
                    </Alert>
                </Snackbar>

            </Stack>

        </div >
    );
};

export default UpdateTravels;