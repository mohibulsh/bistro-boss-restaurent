import { useEffect, useState } from "react"

const useMenu=()=>{
    const [menu,setMenu]=useState([])
    const [loading,setLoadin]=useState(true)
    useEffect(()=>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data=>{
            setMenu(data)
            setLoadin(false)
        })
    },[])
    return [menu,loading]
}
export default useMenu