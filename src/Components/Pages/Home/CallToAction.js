import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div>
            <div className="bg-primary py-10 text-white">
                <div className="max-w-6xl mx-auto py-12 px-5 sm:px-20 lg:py-16 lg:px-20 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-indigo-300">Start your free trial today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link className='btn btn-secondary' to='/'>Get Started</Link>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <Link className='btn btn-neutral' to='/'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
