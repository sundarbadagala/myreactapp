import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {buyMobile, sellMobile} from './redux/actions/actions'

function mobileStore(props) {
    const {noOfMobiles, buyMobile, sellMobile}= props
    return (
        <div>
            Number of Mobiles {noOfMobiles} <br/>
            <button onClick={()=>buyMobile()}>Buy Mobile</button>
            <button onClick={()=>sellMobile()}>Sell Mobile</button>

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
        buyMobile,
        sellMobile
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(mobileStore)
