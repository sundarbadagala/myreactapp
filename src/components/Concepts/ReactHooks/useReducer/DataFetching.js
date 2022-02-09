import Axios from 'axios'
import React, {useState, useEffect} from 'react'

function DataFetching5() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/9')
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setPost({})
            setError('SomeThing Went Wrong')
        })
    }, [])

    return (
        <div>
            {loading ? 'Page is Loading...':post.title}
            {error ? error: null}
        </div>
    )
}

export default DataFetching5
