import React, { useState } from 'react';
import MenuCover from '../SharePages/Menu/MenuCover/MenuCover';
import shopCover from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../Hooks/useMenu';
import ShopIteam from './ShopIteam';
import { useParams } from 'react-router-dom';
const Shop = () => {
    const {category} =useParams();
    console.log(category)
    const categories = ['salad','pizza','soup','dessert','dringing']
    const initialIndex = categories.indexOf(category);
    const [tabIndex,setIndex]=useState(initialIndex)
    const [menu]=useMenu([]);
    const drinks =menu.filter(item=>item.category==="drinks")
    const dessert =menu.filter(item=>item.category==="dessert")
    const salad =menu.filter(item=>item.category==="salad")
    const soup=menu.filter(item=>item.category==="soup")
    const pizza=menu.filter(item=>item.category==="pizza")

    return (
        <div>
            <MenuCover img={shopCover} title={'our shop'}></MenuCover>
            <div className='mt-8'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) =>setIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKING</Tab>
                    </TabList>

                    <TabPanel>
                        <ShopIteam iteams={salad}/>
                    </TabPanel>
                    <TabPanel>
                        <ShopIteam iteams={pizza}/>
                    </TabPanel>
                    <TabPanel>
                        <ShopIteam iteams={soup}/>
                    </TabPanel>
                    <TabPanel>
                        <ShopIteam iteams={dessert}/>
                    </TabPanel>
                    <TabPanel>
                        <ShopIteam iteams={drinks}/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;