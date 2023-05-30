import React from 'react';
import { Helmet } from 'react-helmet-async';

import bgcoverhead from '../../assets/menu/banner3.jpg'
import MenuCover from './MenuCover/MenuCover';
import MenuIteam from '../../Home/MenuIteam/MenuIteam';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss/Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <MenuCover img={bgcoverhead} title={'Our menu'}/>
            <MenuIteam/>
            <MenuCover img={bgcoverhead} title={'Our menu'}/>
            <MenuIteam/>
            <MenuCover img={bgcoverhead} title={'Our menu'}/>
        </div>
    );
};

export default Menu;