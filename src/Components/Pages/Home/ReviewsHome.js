import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Review from './Review';

const ReviewsHome = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://morning-bayou-19534.herokuapp.com/reviews').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='px-12 py-10 bg-slate-50'>
            <h1 className='text-center text-5xl text-secondary font-bold mb-5'>Cutomers Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-5 mt-8'>
                {
                    reviews.map(review => <Review key={review._id} reviewinfo={review} />)
                }
            </div>
        </div>
    );
};

export default ReviewsHome;