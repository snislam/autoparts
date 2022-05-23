import React from 'react';
import avatar from '../../../images/avatar.png'

const Review = ({ reviewinfo }) => {
    const { img, name, ratings, review } = reviewinfo;
    return (
        <div className='p-5 shadow-sm text-center bg-white rounded-md'>
            <img className='w-16 h-16 rounded-full mx-auto' src={img || avatar} alt={name} />
            <h2 className='text-lg font-semibold text-secondary mt-5'>{name}</h2>
            <p>{ratings}</p>
            <p>{review}</p>
        </div>
    );
};

export default Review;