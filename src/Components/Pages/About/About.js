import React from 'react';
import BusinessSummary from '../Home/BusinessSummary';
import CallToAction from '../Home/CallToAction';
import AboutBanner from './AboutBanner';
import AboutHistory from './AboutHistory';

const About = () => {
    return (
        <div>
            <AboutBanner />
            <AboutHistory />
            <BusinessSummary />
            <CallToAction />
        </div>
    );
};
<h1>About page</h1>
export default About;