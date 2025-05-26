import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Pages/Shared/NavBar';
import Footer from '../Pages/Shared/Footer';

const RootLayOuts = () => {
    return (
        <div>
            <NavBar/>
            <div className='min-h-[calc(100vh-300px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayOuts;