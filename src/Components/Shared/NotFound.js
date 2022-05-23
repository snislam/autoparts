import React from 'react';
import img from '../../images/automobile.jpg'

const NotFound = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-between items-center rounded-md shadow-lg my-10 w-100 sm:w-1/2 mx-auto px-12 sm:px-8 py-10'>
            <div className=''>
                <h1 className='text-5xl font-bold text-warning'>Opps! Not Found.</h1>
                <h1 className='text-lg font-semibold text-neutral'>404 - we don't find anything in this link.</h1>
            </div>
            <div className=''>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFound;