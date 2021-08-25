import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Button() {
    return (
        <div className='container-fluid p-3 m-3 d-flex justify-content-center' >
            <button className='btn btn-primary'>
                Click Here
            </button>
            <button className='btn btn-success'>
                Click Here
            </button>
            <button className='btn btn-warning'>
                Click Here
            </button>
            <button className='btn btn-outline-primary'>
                Click Here
            </button>
            <button className='btn btn-outline-success'>
                Click Here
            </button>
            <button className='btn btn-outline-warning'>
                Click Here
            </button>
        </div>
    )
}

export default Button
