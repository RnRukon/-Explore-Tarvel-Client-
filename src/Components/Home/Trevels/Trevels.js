import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Travelers from '../Travelers/Travelers';

const Travels = () => {
    return (
        <div>
            <NavigationBar />
            <Travelers />
            <Footer />
        </div>
    );
};

export default Travels;