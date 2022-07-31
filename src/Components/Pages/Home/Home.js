import React from 'react';
import BusinessSummary from './BusinessSummary';
import CallToAction from './CallToAction';
import Featured from './Featured';
import FeatureProduct from './FeaturedProduct';
import HeroBanner from './HeroBanner';
import HomeBlogs from './HomeBlogs';
import ProductHome from './ProductHome';
import ReviewsHome from './ReviewsHome';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <ProductHome />
            <Featured />
            <BusinessSummary />
            <FeatureProduct />
            <HomeBlogs />
            <ReviewsHome />
            <CallToAction />
        </div>
    );
};

export default Home;