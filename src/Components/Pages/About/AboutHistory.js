import React from 'react';
import aboutImg2 from '../../../images/Rectangle-45.webp'

const AboutHistory = () => {
    return (
        <section className='flex flex-col md:flex-row justify-between items-center py-20 mx-8 md:mx-20 '>
            <div className='flex-1'>
                <img className='rounded-lg' src={aboutImg2} alt="autoparts selling shop" />
            </div>
            <div className='flex-1'>
                <h2 className='text-4xl font-bold text-blue-900'>Established In 2003 In California, USA</h2>
                <h4 className='text-lg font-semibold text-indigo-600 py-5'>We’ve helped millions of customers across the United States fix their car without breaking the bank.</h4>
                <p className='text-md font-normal text-slate-800'>Our wide catalog provides a one-stop-shop for quality, discount auto parts and car accessories across a large selection of vehicle makes, including Ford, Dodge, , Volkswagen and many more.</p>
            </div>
        </section>
    );
};

export default AboutHistory;