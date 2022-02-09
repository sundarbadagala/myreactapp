import {useState} from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom'

function User() {
    const navigate = useNavigate()
    const [userName, setUserName]= useState('')
    const handleChange=(e)=>{
        setUserName(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(userName)
    }
    return (
        <>
            <h4>user details</h4> <hr/>
            <div>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input type='text' placeholder='Enter Username' onChange={(e)=>handleChange(e)}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <ul>
                <Link to='one'><li>User One</li></Link>
                <Link to='tww'><li>User Two</li></Link>
                <Link to='three'><li>User Three</li></Link>
                <Link to='four'><li>User Four</li></Link>
                <Link to='five'><li>User Five</li></Link>
                <Link to='admin'><li>Admin</li></Link>
            </ul>
            <Outlet/>
        </>
    )
}

export default User
