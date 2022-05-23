import React from 'react';
import car from '../../../images/car.png'

const HeroBanner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center px-12 py-20 bg-gray-200'>
            <div className='w-full md:w-1/2'>
                <h1 className='text-5xl font-bold text-primary mb-3'>AutoParts supplier company</h1>
                <p className='text-neutral text-lg'>We are providing the best car parts all over the world. We have well established manufacturing environment. We are dealing 1.5 million client right now.</p>
                <button className='btn btn-primary mt-5'>Get a Qoute</button>
            </div>
            <div className='w-full md:w-1/2'>
                <img src={car} alt="car parts supplier" />
            </div>
        </div >
    );
};

export default HeroBanner;