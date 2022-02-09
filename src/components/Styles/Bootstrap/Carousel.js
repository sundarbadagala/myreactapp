import React from 'react'
import {Carousel, CarouselItem} from 'react-bootstrap'

function Main() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src='https://i.pinimg.com/originals/c6/22/46/c62246425d2c45d07ff2ad24ecd620cc.jpg' alt='' className='w-100' style={{height:'250px'}}/>
                    <Carousel.Caption>
                        <h3>Be a Vegan, Proud to be Vegan</h3>
                        <p>Veg makes you most powerfull</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://www.designyourway.net/blog/wp-content/uploads/2018/01/3d-Desktop-Backgrounds.jpg' alt='' className='w-100' style={{height:'250px'}}/>
                    <Carousel.Caption>
                        <h3>Trees are also life</h3>
                        <p>Trees cant talk but they can feel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://wallpaperaccess.com/full/43654.jpg' alt='' className='w-100' style={{height:'250px'}}/>
                    <Carousel.Caption>
                        <h3>No right to harm Living beings as another Living Being</h3>
                        <p>We are humans not animals, we have mind, maturity, knowledge, wisdome</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <hr/>

            <Carousel fade>
                <Carousel.Item>
                    <img src='https://i.pinimg.com/originals/c6/22/46/c62246425d2c45d07ff2ad24ecd620cc.jpg' alt='' className='w-100' style={{height:'250px'}}/>
                    <Carousel.Caption>
                        <h3>Be a Vegan, Proud to be Vegan</h3>
                        <p>Veg makes you most powerfull</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://www.designyourway.net/blog/wp-content/uploads/2018/01/3d-Desktop-Backgrounds.jpg' alt='' className='w-100' style={{height:'250px'}}/>
                    <Carousel.Caption>
                        <h3>Trees are also life</h3>
                        <p>Trees cant talk but they can feel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://wallpaperaccess.com/full/43654.jpg' alt='' className='w-100' style={{height:'250px'}}/>
                    <Carousel.Caption>
                        <h3>No right to harm Living beings as another Living Being</h3>
                        <p>We are humans not animals, we have mind, maturity, knowledge, wisdome</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <hr/>

            <Carousel interval={500}>
                <Carousel.Item>
                    <img src='https://i.pinimg.com/originals/c6/22/46/c62246425d2c45d07ff2ad24ecd620cc.jpg' alt='' className='w-100' style={{height:'250px'}}/>
                    <Carousel.Caption>
                        <h3>Be a Vegan, Proud to be Vegan</h3>
                        <p>Veg makes you most powerfull</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://www.designyourway.net/blog/wp-content/uploads/2018/01/3d-Desktop-Backgrounds.jpg' alt='' className='w-100' style={{height:'250px'}}/>
                    <Carousel.Caption>
                        <h3>Trees are also life</h3>
                        <p>Trees cant talk but they can feel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://wallpaperaccess.com/full/43654.jpg' alt='' className='w-100' style={{height:'250px'}}/>
                    <Carousel.Caption>
                        <h3>No right to harm Living beings as another Living Being</h3>
                        <p>We are humans not animals, we have mind, maturity, knowledge, wisdome</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Main
