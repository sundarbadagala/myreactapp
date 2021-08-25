import React from 'react'
import {connect} from 'react-redux'
import {incrementValue, decrementValue} from './redux/actions'

function Card(props) {
    return (
        <div>
            this is the card {props.count}
            <button onClick={props.incrementValue}>+</button>
            <button onClick={props.decrementValue}>-</button>
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
        incrementValue : ()=>dispatch(incrementValue()),
        decrementValue : ()=>dispatch(decrementValue())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)
