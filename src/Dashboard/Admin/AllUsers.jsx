import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/users')
            return response.json()
        }
    })

    const handleDelete =(user) =>{
           Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`,{
                    method:'DELETE'
                   })
                   .then(res=>res.json())
                   .then(data=>{
                    refetch()
                      if(data.deletedCount > 0){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `${user.name} delete an admin`,
                            showConfirmButton: false,
                            timer: 1500
                          })
                      }
                   })
            }
          })
    }


    const handleMakeAdmin =(user)=>{
       fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:'PATCH'
       })
       .then(res=>res.json())
       .then(data=>{
        refetch();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${user.name} becom an admin`,
            showConfirmButton: false,
            timer: 1500
          })
       })
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
                                    <button onClick={() => handleMakeAdmin(user)} className="bg-orange-500 btn btn-ghost btn-md text-white"
                                    ><FaUserShield/></button>
                                    }</td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className="bg-red-500 btn btn-ghost btn-md text-white"
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