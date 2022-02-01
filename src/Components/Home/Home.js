import React from 'react';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Sitebar from './Sitebar/Sitebar';
import Test from './Test';
import Travelers from './Travelers/Travelers';

const Home = () => {
    return (
        <div className=' overflow-hidden'>
            <NavigationBar />
            <Banner />
            <div className='row'>
                <div className='col-md-8'>
                    <Travelers />
                </div>
                <div className='col-md-4'>
                    <Sitebar />
                </div>
            </div>
            <Test />

            <Footer />
        </div>
    );
};

export default Home;