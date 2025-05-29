import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Pages/Shared/NavBar';
import Footer from '../Pages/Shared/Footer';

const RootLayOuts = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <NavBar/>
            <div className='min-h-[calc(100vh-300px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayOuts;