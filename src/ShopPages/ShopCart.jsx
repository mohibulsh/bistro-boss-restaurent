import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ShopCart = ({ iteam }) => {
    const { user } = useContext(authContext)
    const { name, recipe, image, price,_id } = iteam;
    const Navigate =useNavigate()
    const handlerAddToShopping = (shoppingItem) => {
        console.log(shoppingItem)
        const cardItem ={ foodId:_id,name,image,price,email:user.email}
        if (user && user.email) {
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cardItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } 
                })
        }  else {
            Swal.fire({
                title: 'Are you sure login the Account?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
              }).then((result) => {
                if (result.isConfirmed) {
                       Navigate('/login')
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl relative ">
            <figure><img src={image} alt={name} /></figure>
            <p className='bg-slate-800 absolute right-0 me-4 mt-4
             px-2 rounded font-bold text-green-500'>${price}</p>
            <div className="card-body flex flex-col items-center ">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handlerAddToShopping(iteam)} className="btn btn-outline text-white border-0
                     border-b-4 bg-green-500 text-black">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;