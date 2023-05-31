import React from 'react';
import MenuCover from '../MenuCover/MenuCover';
import IteamCart from '../../IteamCart';

const MenuCart = ({ iteams, img, title }) => {
    return (
        <div>
            <MenuCover img={img} title={title}></MenuCover>
            <div className='grid md:grid-cols-2 gap-4 xl:gap-8 my-20'>
                {
                    iteams.map(iteam => <IteamCart
                        key={iteam._id}
                        iteam={iteam}
                    />)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline btn-primary uppercase border-0 border-b-4  mb-12">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCart;