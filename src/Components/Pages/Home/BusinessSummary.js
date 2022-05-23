import { ChatAlt2Icon, CurrencyDollarIcon, FlagIcon, UserGroupIcon } from '@heroicons/react/outline'
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='px-12 py-12'>
            <div className='py-5'>
                <h1 className='text-center text-5xl font-semibold text-primary uppercase'>Millions of Business Trust Us</h1>
                <p className='text-center text-2xl text-neutral uppercase mt-3'>Try to understand the customers state</p>
            </div>
            <div className='py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                <div className='flex flex-col justify-center items-center border-2 rounded-md p-7'>
                    <p className='w-16 h-16 text-secondary font-thin'><FlagIcon /></p>
                    <p className='text-5xl my-5'>94</p>
                    <p className='text-3xl font-normal text-neutral'>Countries</p>
                </div>

                <div className='flex flex-col justify-center items-center border-2 rounded-md p-7'>
                    <p className='w-16 h-16 text-secondary font-thin'><UserGroupIcon /></p>
                    <p className='text-5xl my-5'>1M+</p>
                    <p className='text-3xl font-normal text-neutral'>Happy Clients</p>
                </div>

                <div className='flex flex-col justify-center items-center border-2 rounded-md p-7'>
                    <p className='w-16 h-16 text-secondary font-thin'><ChatAlt2Icon /></p>
                    <p className='text-5xl my-5'>5000+</p>
                    <p className='text-3xl font-normal text-neutral'>Positive Reviews</p>
                </div>

                <div className='flex flex-col justify-center items-center border-2 rounded-md p-7'>
                    <p className='w-16 h-16 text-secondary font-thin'><CurrencyDollarIcon /></p>
                    <p className='text-5xl my-5'>3B+</p>
                    <p className='text-3xl font-normal text-neutral'>Reveneu Per Year</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;