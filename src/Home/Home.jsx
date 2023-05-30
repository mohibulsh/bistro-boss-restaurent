import React from 'react';
import Banner from './Banner/Banner';
import Swipper from './BannerSwipper/Swipper';
import MenuIteam from './MenuIteam/MenuIteam';
import FeaturesItem from './FeaturesItem/FeaturesItem';
import Testimonial from './Testimonnial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Swipper/>
            <MenuIteam/>
            <FeaturesItem/>
            <Testimonial/>
        </div>
    );
};

export default Home;