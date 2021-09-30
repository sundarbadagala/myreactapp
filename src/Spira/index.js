import React from 'react'
import {getTime} from './getTime'

function Index() {
    const value = '12-12-2021 18:21:239'
    const result = getTime(value, 'dd-mm-yy')
    console.log(value)
    console.log(result)
    return (
        <div>
            
        </div>
    )
}

export default Index
