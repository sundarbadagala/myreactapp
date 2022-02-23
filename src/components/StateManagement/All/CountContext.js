import React from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'
import {ProductConsumer} from './useContext/Context'

function Count() {
    return (
        <ProductConsumer>
        {
            value=>{
                const {count, incrementValue, decrementValue}= value
                return(
                    <div className='m-3'>
                    Count App using Context<br/>
                        <ButtonGroup>
                            <Button onClick={()=>decrementValue()}>-</Button>
                            <Button variant='outline-primary' disabled>{count}</Button>
                            <Button onClick={()=>incrementValue()}>+</Button>
                        </ButtonGroup>
                    </div>
                )
            }
        }
        </ProductConsumer>
    )
}

export default Count
