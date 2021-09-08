import React from 'react'
import {Wrapper, } from './footerStyled'

function Footer() {
    return (
        <Wrapper>
            <div>
                &copy; 2021 cnaps.in
            </div>
            <div className='footer-list'>
                <span>FAQ's</span>
                <span>Privacy Policy</span>
                <span>T&#38;C</span>
            </div>
        </Wrapper>
    )
}

export default Footer
