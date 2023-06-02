import React from 'react';
import ShopCart from './ShopCart';

const ShopIteam = ({iteams}) => {
    return (
        <div  className='grid md:grid-cols-2 xl:grid-cols-3 gap-12 my-12'>
                {
                    iteams.map(iteam => <ShopCart
                        key={iteam._id}
                        iteam={iteam}
                    />)
                }
        </div>
    );
};

export default ShopIteam;