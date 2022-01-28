import React, { useState } from 'react';
import { Alert, AlertTitle, Grid } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, authError } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const login = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        await loginUser(loginData.email, loginData.password, location, history)
        e.target.reset();
    }
    return (
        <Grid sx={{ mt: 12 }}>
            <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                    <input

                        required
                        id="standard-password-email"
                        type="email"
                        name="email"
                        autoComplete="current-email"
                        onChange={login}
                        placeholder="Email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"

                    ></input>
                </div>
                <input
                    required
                    id="standard-password-input"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    onChange={login}
                    placeholder="Password"
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                /> <br /> <br />
                <button type="submit" className=" bg-cyan-700 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" variant="contained">Login</button>
            </form>

            {authError && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {authError} <strong>check it out!</strong>
            </Alert>}
        </Grid>
    );
};

export default Login;