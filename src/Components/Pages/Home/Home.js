import React from 'react';
import BusinessSummary from './BusinessSummary';
import CallToAction from './CallToAction';
import Featured from './Featured';
import HeroBanner from './HeroBanner';
import ProductHome from './ProductHome';
import ReviewsHome from './ReviewsHome';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <ProductHome />
            <Featured />
            <BusinessSummary />
            <ReviewsHome />
            <CallToAction />
        </div>
    );
};

export default Home;