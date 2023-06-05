import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/users')
            return response.json()
        }
    })

    const handleDelete =(id) =>{
        console.log(id)
    }
    const handleMakeAdmin =(id)=>{

    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss/All Users</title>
            </Helmet>
            <h2 className='text-xl font-bold py-4'>Total iteam {users.length}</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users?.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role ==='admin'?'admin':
                                    <button onClick={() => handleMakeAdmin(user._id)} className="bg-orange-500 btn btn-ghost btn-md text-white"
                                    ><FaUserShield/></button>
                                    }</td>
                                    <td>
                                        <button onClick={() => handleDelete(user._id)} className="bg-red-500 btn btn-ghost btn-md text-white"
                                        ><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;