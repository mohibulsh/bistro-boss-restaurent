import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import IteamCart from '../../SharePages/IteamCart';
import useMenu from '../../Hooks/useMenu';

const MenuIteam = () => {
    const {menu}=useMenu([])
    // const [menu,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res =>res.json())
    //     .then(data=>{
    //         const popularItm =data.filter(item=>item.category==="popular")
    //         setMenu(popularItm)
    //     })
    // },[])
    console.log(menu)
    return (
        <>
            <SectionTitle
             heading={'from our menu'}
             subHeading={'chek it out'}
            />
            <div className='grid md:grid-cols-2 gap-4 xl:gap-8 mb-12'>
                {
                    menu.map(iteam=><IteamCart
                    key={iteam._id}
                    iteam={iteam}
                    />)
                }
            </div>
        </>
    );
};

export default MenuIteam;