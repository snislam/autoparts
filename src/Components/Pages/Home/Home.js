import React from 'react';
import BusinessSummary from './BusinessSummary';
import HeroBanner from './HeroBanner';
import ProductHome from './ProductHome';
import ReviewsHome from './ReviewsHome';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <ProductHome />
            <ReviewsHome />
            <BusinessSummary />
        </div>
    );
};

export default Home;