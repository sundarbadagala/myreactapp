import React, { Component } from 'react'
import './CssStyling.css'
import style from './CssStyling.module.css'


export class CssStyling2 extends Component {
    styles={
        color:'blue'
    }
    render() {
        return (
            <div>
                <h3 style={{color:'red'}}>INLINE STYLING</h3>
                <h3 style={this.styles}>INTERNAL STYLING</h3>
                <h3 className='styles'>EXTERNAL STYLE SHEET</h3>
                <h3 className={style.styling}>EXTERNAL MODULE STYLE SHEET </h3>
            </div>
        )
    }
}

export default CssStyling2
