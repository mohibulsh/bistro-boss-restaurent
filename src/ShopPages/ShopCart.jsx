import React from 'react';

const ShopCart = ({iteam}) => {
    const {name,recipe,image,price}=iteam;
    return (
        <div className="card w-96 bg-base-100 shadow-xl relative ">
            <figure><img src={image} alt={name} /></figure>
            <p className='bg-slate-800 absolute right-0 me-4 mt-4 px-2 rounded font-bold'>${price}</p>
            <div className="card-body flex flex-col items-center ">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline text-white border-0 border-b-4 bg-slate-200 text-black">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;