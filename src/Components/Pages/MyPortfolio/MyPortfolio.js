import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='mx-12 p-12'>
            <h1 className='text-5xl text-center font-bold'>My portfolio</h1>
            <h1 className='text-md text-neutral py-2'>Name: Shaikh Najmul Islam</h1>
            <p className='text-md text-neutral py-2'>Email: najmulbge17@gmail.com</p>
            <p className='text-md text-neutral py-2'>Education: Bsc Hon's at Biotechnology and Genetic Engineering in BSMRSTU</p>
            <h2 className='text-md text-neutral py-2 font-bold'>List of technologies I learned</h2>
            <ol className='text-md text-neutral py-2'>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>Javascript</li>
                <li>ES 6</li>
                <li>REACT JS</li>
                <li>Firebase</li>
                <li>Node Js</li>
                <li>Express Js</li>
                <li>MongoDB</li>
            </ol>
            <h2 className='text-md text-neutral py-2 font-bold'>Thre website links</h2>
            <ol className='text-md text-neutral py-2'>
                <li className='text-primary'><a href="https://bike-park-8a78c.web.app/">https://bike-park-8a78c.web.app/</a></li>
                <li className='text-primary'><a href="https://career-hunter-6eb88.web.app/">https://career-hunter-6eb88.web.app/</a></li>
                <li className='text-primary'><a href="https://electric-car-review.netlify.app/">https://electric-car-review.netlify.app/</a></li>
            </ol>
        </div>
    );
};

export default MyPortfolio;