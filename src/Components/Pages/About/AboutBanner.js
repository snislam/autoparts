import React from 'react';
import aboutImg1 from '../../../images/car.png'

const AboutBanner = () => {
    return (
        <section className='flex flex-col md:flex-row justify-between items-center p-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'>
            <div className='flex-1'>
                <h1 className='text-5xl font-bold text-white p-12'>An e-commerce auto parts retailer with <span className='text-pink-900'>over 10 million</span> orders</h1>
            </div>
            <div className='flex-1 hidden md:block'>
                <img src={aboutImg1} alt="autoparts" />
            </div>
        </section>
    );
};

export default AboutBanner;