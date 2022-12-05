import { Alert, AlertTitle, Grid, LinearProgress } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, authError } = useAuth();
    const location = useLocation()
    const history = useHistory()

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.rePassword) {

            return alert('Your PassWord ded not match')

        }

        registerUser(loginData.email, loginData.password, loginData.name, location, history)


        e.target.reset();
    }
    return (

        <Grid sx={{ mt: 12}}>
               <h1 className=' text-lg text-center my-7 fw-bolder'>Register</h1>
            {
                isLoading ? <LinearProgress /> :
                    <form onSubmit={handleLoginSubmit} >
                         <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Full Name
                    </label>
                        <input

                            required
                            id="standard-name-input"
                            type="text"
                            name="name"
                            autoComplete="current-name"
                            placeholder='You Full Name'
                            onBlur={handleOnBlur}
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        /> <br />
                         <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                        <input
                            required
                            id="standard-email-input"
                            label="You Email"
                            type="email"
                            name="email"
                            placeholder='email'
                            autoComplete="current-email"
                            onBlur={handleOnBlur}
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        /> <br />
                         <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Password
                    </label>
                        <input
                            required
                            id="standard-password-input"
                            type="password"
                            name="password"
                            placeholder='password'
                            autoComplete="current-password"
                            onBlur={handleOnBlur}
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"

                        />
                         <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Re-Password
                    </label>
                        <input
                            required
                            id="standard-password-input"
                            type="password"
                            name="rePassword"
                            autoComplete="current-password"
                            placeholder='RePassword'
                            onBlur={handleOnBlur}
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"

                        />
                        <button type="submit" className=" bg-cyan-700 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Register</button>
                    </form>
            }

            {
                authError && <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {authError} <strong>check it out!</strong>
                </Alert>
            }

        </Grid>

    );
};

export default Register;