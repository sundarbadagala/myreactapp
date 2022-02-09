import React from 'react'
import Main from './DuplitcationRemove'


function index() {
    const arr = [1,1,1,2,3,4,5,3,2,1]
    return (
        <div>
            <Main value={arr}/>

        </div>
    )
}

export default index
