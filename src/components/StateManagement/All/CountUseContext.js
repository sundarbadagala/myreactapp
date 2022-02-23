import React, {useContext} from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'
import {ProductContext} from './useContext/Context'

function Count5() {
    const product=useContext(ProductContext)
    const {count, decrementValue, incrementValue}= product
    return (
        <div className='m-3'>
        Count App using useContext<br/>
             <ButtonGroup>
                <Button onClick={()=>decrementValue()}>-</Button>
                <Button variant='outline-primary' disabled>{count}</Button>
                <Button onClick={()=>incrementValue()}>+</Button>
            </ButtonGroup>
        </div>
    )
}

export default Count5
