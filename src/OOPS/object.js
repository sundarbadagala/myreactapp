import React from 'react'

function Objects() {
    let user={
        name:'Vijay',
        age:'22',
        color:'black'
    }
    const Details=(name)=>{
        return name
    }
    return (
        <div>
            {
                Details()
            }
        </div>
    )
}

export default Objects
