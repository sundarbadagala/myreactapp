import {useState, useEffect} from 'react'
import axios from 'axios'

function Redmi() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData]= useState([])
    const [error, setError]=useState('')

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_JSON_LINK}/data`)
        .then(res =>{
            setData(res.data)
            setIsLoading(false)
        })
        .catch(error => {
            setError(error.message)
            setIsLoading(false)
        })
    },[])
    if(isLoading){
        return <h6>loading...</h6>
    }
    if(error){
        return <h6>{error}</h6>
    }
    console.log(process.env.REACT_APP_JSON_LINK)
    return (
        <div>
            {
                data.map(item => <div>{item.title}</div>)
            }
        </div>
    )
}

export default Redmi
