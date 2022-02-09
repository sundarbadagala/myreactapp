import React from 'react'
import {connect} from 'react-redux'
import { decrementValue, incrementValue } from './redux/actions'
import {ButtonGroup, Button} from 'react-bootstrap'

function Count(props) {
    return (
        <div className='m-3'>
            Count App using Redux<br/>
            <ButtonGroup>
                <Button onClick={props.decrementValue}>-</Button>
                <Button variant='outline-primary' disabled>{props.count}</Button>
                <Button onClick={props.incrementValue}>+</Button>
            </ButtonGroup>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        count: state.count
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        incrementValue: ()=>dispatch(incrementValue()),
        decrementValue: ()=>dispatch(decrementValue())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
