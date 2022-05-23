import React from 'react';

const Footer = () => {
    return (
        <div className='bg-accent text-white pt-10 pb-3'>
            <div className='flex flex-col md:flex-row px-12'>
                <div className='w-full md:w-1/3'>
                    <h2 className='text-2xl font-bold text-slate-400 mb-3'>About Autoparts</h2>
                    <p>AutoParts was established in 19965 and till now it is providing the best products to it,s client. Best and first global parts supplier in China.</p>
                </div>
                <div className='w-full md:w-1/3'>
                    <h2 className='text-2xl font-bold text-slate-400 mb-3'>Important Links</h2>
                    <ul>
                        <li>My Profile</li>
                        <li>My Orders</li>
                        <li>Reviews</li>
                        <li>Products View</li>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h2 className='text-2xl font-bold text-slate-400 mb-3'>Contact Us</h2>
                    <p>Email: contact@autoparts.com</p>
                    <p>Phone: 993 234 116</p>
                </div>
            </div>
            <p className='text-center pt-5'>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;