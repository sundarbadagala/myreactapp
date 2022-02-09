import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {buyMobile, sellMobile} from '../redux/actions/actions'

const style={
    border:'1px solid black',
    margin:'2px',
    backgroundColor:'lightblue',
    padding:'2px 5px'
}

function mobileDetails(props) {
    const {noOfMobiles, buyMobile, sellMobile}= props
    return (
        <div>
            no of mobiles {noOfMobiles} <br/>
            <button onClick={()=>buyMobile()} style={style}>BUY MOBILE</button>
            <button onClick={()=>sellMobile()} style={style}>SELL MOBILE</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        noOfMobiles: state.mobiles.noOfMobiles
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        sellMobile,
        buyMobile
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(mobileDetails)
