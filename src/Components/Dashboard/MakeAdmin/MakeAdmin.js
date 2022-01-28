import { Alert, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const emailOnBlur = (e) => setEmail(e.target.value);

    const handleAddAdmin = (e) => {
        const user = { email }
        fetch('https://hidden-plains-90674.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        // e.target.reset()
        e.preventDefault()
    }
    return (
        <div>
            <Typography variant='h6' color="secondary">Make Admin</Typography>
            <Box className='row'>
                <Box className="col-lg-6">
                    <form onSubmit={handleAddAdmin}>
                        {
                            success &&
                            <Alert severity="success">Admin add Success</Alert>

                        }

                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input

                            type="email"
                            onBlur={emailOnBlur}
                            placeholder="Email"
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <button type='submit' className=" bg-cyan-700 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add Admin</button>

                    </form>
                </Box>
                <Box className='col-lg-6'>
                    <img className='img-fluid' src="https://i.ibb.co/6wczVJp/login-img.png" alt="" />
                </Box>
            </Box>
        </div>
    );
};

export default MakeAdmin;