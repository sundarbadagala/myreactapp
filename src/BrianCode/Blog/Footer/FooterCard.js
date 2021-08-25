import React from 'react'
import './FooterCard.css'
import { Link } from 'react-router-dom'

function FooterCard(props) {
    return (
        <div>
            <div className='footer-title'>
                {props.title}
            </div>
            <ul className='footer-list'>
                {
                    props.menu.map((item, index) => <li key={index}><Link className={item.cName} to={item.url}><i className={item.logo}/> {item.title}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default FooterCard
