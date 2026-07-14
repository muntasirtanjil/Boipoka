import React from 'react';
import Navber from '../../Components/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div >
            <div className='position-stikey'> <Navber></Navber></div>

            <div className='w-[95%] mx-auto'><Outlet></Outlet></div>
            <div> <Footer></Footer></div>
        </div>
    );
};

export default Root;