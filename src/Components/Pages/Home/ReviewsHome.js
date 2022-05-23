import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Review from './Review';

const ReviewsHome = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('reviews.json').then(res => res.json()))
    let homeReview;
    if (isLoading) {
        return <Loading />
    }

    reviews.length > 3 ? homeReview = reviews.slice(0, 3) : homeReview = reviews;

    return (
        <div className='px-12 py-10 bg-slate-200'>
            <h1 className='text-center text-5xl text-secondary font-bold mb-5'>Cutomers Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-5'>
                {
                    homeReview.map(review => <Review key={review._id} reviewinfo={review} />)
                }
            </div>
        </div>
    );
};

export default ReviewsHome;