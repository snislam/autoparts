import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div>
            <div className="bg-blue-200 py-10">
                <div className="max-w-6xl mx-auto py-12 px-5 sm:px-20 lg:py-16 lg:px-20 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-blue-500">Make a purchase and test the quality!</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link className='btn btn-secondary' to='/dashboard'>Go to DashBoard</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
