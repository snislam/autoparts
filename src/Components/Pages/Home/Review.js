import React from 'react';
import avatar from '../../../images/avatar.png';
import ReactStars from "react-rating-stars-component";

const Review = ({ reviewinfo }) => {
    const { img, name, ratings, review } = reviewinfo;
    return (
        <div className='p-5 shadow-sm text-center bg-white rounded-md min-h-[300px] flex flex-col items-center'>
            <img className='w-16 h-16 rounded-full mx-auto' src={img || avatar} alt={name} />
            <h2 className='text-lg font-semibold text-secondary mt-5'>{name}</h2>
            <p className='text-center'> {<ReactStars
                count={ratings}
                size={24}
                isHalf={true}
                edit={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                color="tomato"
            />}</p>
            <p>{review}</p>
        </div>
    );
};

export default Review;