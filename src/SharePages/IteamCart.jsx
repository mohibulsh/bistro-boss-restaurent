import React from 'react';

const IteamCart = ({iteam}) => {
    const {recipe,name,image,price}=iteam
    return (
        <div className='flex gap-x-4'>
            <img style={{width:'104px' ,borderRadius:'0px 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h3 className='text-xl uppercase'>{name} ----------</h3>
                <p>{recipe}</p>
            </div>
            <h4 className='text-yellow-600 font-bold'>${price}</h4>
        </div>
    );
};

export default IteamCart;