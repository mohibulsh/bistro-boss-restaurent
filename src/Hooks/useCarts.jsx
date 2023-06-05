import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';

const useCarts = () => {
    const {user}=useContext(authContext)
    const token =localStorage.getItem('access-token')
    const { isLoading, data:cart=[],refetch } = useQuery({
        queryKey: ['carts',user?.email],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/carts?email=${user.email}`,{
                headers:{
                    authorization:`bearer ${token}`
                }
            })
            return response.json()
        },
        
      })
      return[isLoading,cart,refetch]
};

export default useCarts;