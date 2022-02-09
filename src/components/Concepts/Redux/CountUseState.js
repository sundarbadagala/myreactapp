import React, {useState} from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'

function Count() {
    const [count, setCount]= useState(0)
    const decrementValue=()=>{
        setCount(count-1)
    }
    const incrementValue=()=>{
        setCount(count+1)
    }
    return (
        <div className='m-3'>
        Count App using useState in function<br/>
            <ButtonGroup>
                <Button onClick={()=>decrementValue()}>-</Button>
                <Button variant='outline-primary' disabled>{count}</Button>
                <Button onClick={()=>incrementValue()}>+</Button>
            </ButtonGroup>
        </div>
    )
}

export default Count
