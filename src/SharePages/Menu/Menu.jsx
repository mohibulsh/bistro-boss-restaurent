import React from 'react';
import { Helmet } from 'react-helmet-async';

import bgcoverhead from '../../assets/menu/banner3.jpg'
import MenuCover from './MenuCover/MenuCover';
import MenuIteam from '../../Home/MenuIteam/MenuIteam';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import useMenu from '../../Hooks/useMenu';
import IteamCart from '../IteamCart';
import MenuCart from './MenuCart/MenuCart';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
const Menu = () => {
    const [menu]=useMenu([]);
    const offered =menu.filter(item=>item.category==="offered")
    const dessert =menu.filter(item=>item.category==="dessert")
    const salad =menu.filter(item=>item.category==="salad")
    const soup=menu.filter(item=>item.category==="soup")
    const pizza=menu.filter(item=>item.category==="pizza")
    console.log(pizza)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss/Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <MenuCover img={bgcoverhead} title={'Our menu'}/>
            <SectionTitle heading={"today's offered" } subHeading={"don't miss"}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4 xl:gap-8 mb-12'>
                {
                    offered.map(iteam=><IteamCart
                    key={iteam._id}
                    iteam={iteam}
                    />)
                }
            </div>
            <MenuCart iteams={dessert} img={dessertImg} title={'dessert'} ></MenuCart>
            <MenuCart iteams={pizza} img={pizzaImg} title={'pizza'} ></MenuCart>
            <MenuCart iteams={salad} img={saladImg} title={'salad'} ></MenuCart>
            <MenuCart iteams={soup} img={soupImg} title={'soup'} ></MenuCart>
            
        </div>
    );
};

export default Menu;