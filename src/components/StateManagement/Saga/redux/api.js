import axios from 'axios'

export const fetchData = async()=>{
    const res = await axios.get('https://fakestoreapi.com/products')
    return res
}