import React from 'react';
import parts from '../../../images/banner.png';
import bg from '../../../images/ban_bg.jpg';

const HeroBanner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center px-12 py-32] min-h-screen' style={{ backgroundImage: `url(${bg})` }}>
            <div className='w-full md:w-1/2'>
                <h1 className='text-5xl font-bold text-slate-300 mb-3'>AutoParts supplier company</h1>
                <p className='text-slate-400 text-lg'>We are providing the best car parts all over the world. We have well established manufacturing environment. We are dealing 1.5 million client right now.</p>
                <button className='btn btn-primary mt-5'>Get a Qoute</button>
            </div>
            <div className='hidden md:flex w-full md:w-1/2'>
                <img src={parts} alt="car parts supplier" />
            </div>
        </div >
    );
};

export default HeroBanner;