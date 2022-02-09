import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import FirstPic from '../images/img-1.jpg'
import SecondPic from '../images/img-2.jpg'
import ThirdPic from '../images/img-3.jpg'
import FourthPic from '../images/img-4.jpg'
import FifthPic from '../images/img-5.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out Epic Destination</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={FirstPic}
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Adventure'
                            path='/service'
                        />

                        <CardItem
                            src={SecondPic}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/service'
                        />

                        <CardItem
                            src={ThirdPic}
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Adventure'
                            path='/service'
                        />

                        <CardItem
                            src={FourthPic}
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Adventure'
                            path='/service'
                        />

                        <CardItem
                            src={FourthPic}
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Adventure'
                            path='/service'
                        />
                
                    </ul>
                </div>
            </div>            
        </div>
    )
}

export default Cards
