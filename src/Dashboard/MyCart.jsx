import React from 'react';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useCarts from '../Hooks/useCarts';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
const MyCart = () => {
    const [,cart,refetch] = useCarts()
    const total = cart?.reduce((sum, iteam) => iteam.price + sum, 0)
    const handleDelete =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: `Are you sure delete the ${cart.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${id}`,{
                method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: `you products is delete`,
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                }
              })
            }
          })
    }
    return (
        <div className='min-h-screen xl:max-w-full max_width'>
            <Helmet>
                <title>Bistro Boss||My cart</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <SectionTitle subHeading={'my cart'}
                heading={'wanna add more ?'}></SectionTitle>

            <div className='uppercase font-bold flex h-14 justify-between max_width'>
                <div className="text-xl"> iteam {cart?.length}</div>
                <div className="text-xl"> Price ${total?.toFixed(2)} </div>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
                {/* // show the cart price */}
            <div className="overflow-y-auto">
                <table className="table max_width">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Food</th>
                            <th>Iteam Name</th>
                            <th>Price</th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                     {
                        cart?.map((iteam,index)=>   <tr
                        key={iteam._id}
                         >
                            <td>
                              {index +1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={iteam.image} alt={iteam.name} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               {iteam.name}
                            </td>
                            <td>{iteam.price}</td>
                            <th>
                                <button onClick={()=>handleDelete(iteam._id)} className="bg-red-500 btn btn-ghost btn-md text-white"
                                ><FaTrashAlt></FaTrashAlt></button>
                            </th>
                        </tr>)
                     }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;