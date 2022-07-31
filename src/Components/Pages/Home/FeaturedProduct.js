import React from 'react';

const FeatureProduct = () => {
    return (
        <div className='py-10 mb-10 px-3 bg-slate-50'>
            <h1 className='text-4xl font-bold text-center py-5 mb-3'>Featured By the Authority</h1>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='md:w-3/6 w-full'>
                    <img className='md:origin-top-left rotate-2' src="https://i.ibb.co/8bj2HRJ/gear-lever.jpg" alt="" />
                </div>
                <div className='p-3'>
                    <h1 className='text-2xl Ffakeont-semibold'>The Best Selling Product In this Week.</h1>
                    <p className='py-2'>Featured By <span className='text-purple-700 font-semibold'>Autoparts Ltd.</span></p>
                    <ul className='list-decimal'>
                        <li className='ml-10'>Best deals</li>
                        <li className='ml-10'>Most sustainable Gear</li>
                        <li className='ml-10'>15% commission extra (code: eid15)</li>
                        <li className='ml-10'>Free technical support by the company</li>
                        <li className='ml-10'>Best selling product in this week</li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default FeatureProduct;