import React from 'react';
import Banner from './Banner/Banner';
import Swipper from './BannerSwipper/Swipper';
import MenuIteam from './MenuIteam/MenuIteam';
import FeaturesItem from './FeaturesItem/FeaturesItem';
import Testimonial from './Testimonnial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss/Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner />
            <Swipper />
            <MenuIteam />
            <FeaturesItem />
            <Testimonial />
        </div>
    );
};

export default Home;