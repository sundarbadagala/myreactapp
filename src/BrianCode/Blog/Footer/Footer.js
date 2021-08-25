import React from 'react'
import './Footer.css'
import FooterCard from './FooterCard'
import {AboutUs, Services, ContactUs, Social} from './menuData'

function Footer() {
    return (
        <div className='footer-main'>
            <FooterCard title='About Us' menu={AboutUs}/>
            <FooterCard title='Services' menu={Services}/>
            <FooterCard title='Contact Us' menu={ContactUs}/>
            <FooterCard title='Social Media' menu={Social}/>
        </div>
    )
}

export default Footer
