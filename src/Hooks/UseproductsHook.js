
import axios from "axios"
import { useEffect, useState } from "react"


const UseproductsHook=()=>{

    const [apps,setapps] = useState([])
    const [loading,setloading] = useState(true)
    const [err,seterr]= useState(null)

    useEffect(()=>{
    setloading(true)
    axios('../appjsondata.json')
    .then(data=>setapps(data.data))
    .catch(err=>seterr(err))
    .finally(()=>setloading(false))
    },[])
    return {apps,loading,err}
}

export default UseproductsHook