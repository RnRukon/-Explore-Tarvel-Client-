import { Box, Button, Container, Divider, Grid, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import NavigationBar from '../../../Shared/NavigationBar/NavigationBar';

const TravelsDetails = () => {
    const { id } = useParams();
    const [travel, seTravel] = useState({});
    useEffect(() => {
        fetch(`https://hidden-plains-90674.herokuapp.com/travel/${id}`)
            .then(res => res.json())
            .then(data => seTravel(data))
    }, [id])

    return (
        <div>
            <NavigationBar />
            {/*   <div className=' container className="max-w-6xl mx-auto"'>
                <h1>Details travels {id}</h1>
                <img src={travel?.img} alt="" />
                <h1>{travel?.title}</h1>
                <h1>{travel?.price}</h1>
                <h1>{travel?.location}</h1>
                <h1>{travel?.address}</h1>
                <h1>{travel?.description}</h1>
            </div> */}
            <Container className='py-36'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid className="row ">

                        <Grid className='col-sm-12 col-md-6 col-lg-6'>
                            <img className='img-fluid' src={travel?.img} alt="" />
                        </Grid>
                        <Grid className='col-sm-12 col-md-6 col-lg-6'>
                            <Typography variant='h3' color='secondary'>{travel?.title}</Typography>
                            <h4 className=' font-bold text-emerald-500'>Total Cost $ {travel?.price}</h4>

                            <Divider />
                            <Link to='/home' ><Button color='warning' className='mt-2' variant="contained"> Go to home</Button></Link>


                            <Box className='mt-5'>
                                <Typography variant='h4' color='secondary'>Contact informations</Typography>
                                <p className='text-yellow-500'>A: Kichijoji Sun Road 21/1, Tokyo.</p>
                                <p>T: + 123 456 789: + 123 456 8788</p>
                                <small>E: etruscan@qodeinteractive.com</small>
                                <p>W: Thursday to Sunday – 12.00 – 20.00h.</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className=' flex justify-center mt-10'>

                    <Box className=' max-w-screen-md text-justify'>
                        <p>{travel?.description}</p>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default TravelsDetails;