import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Gallery.css'

const Slideshow = () => {
  const images = [
    'https://www.brmexpeditions.com/wp-content/uploads/2019/12/RE-Classic-350-Black.jpg',
    'https://motoringworld.in/wp-content/uploads/2020/08/Honda-Hornet-4-Copy.jpg',
    'https://s3.paultan.org/image/2018/07/2017-KTM-Duke-200-Malaysia-1.jpg',
    'https://images.carandbike.com/bike-images/colors/jawa/forty-two/jawa-forty-two-halley-s-teal.jpg?v=1542273908'
  ];
  
  const zoomOutProperties = {
    indicators: true,
    scale: 0.1
  }
  return (
    <div className='gallery-main'>
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width:"500px", height:'300px', borderRadius:'40px' }} src={each} alt='' />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;