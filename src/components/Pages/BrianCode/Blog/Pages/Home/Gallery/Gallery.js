import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Gallery.css'

const Slideshow = () => {
  const images = [
    'https://fbcoverstreet.com/thumbnail/vyCfaZAXEVq31UdlrtYZK5AKvcUBVtjm9XEbJS2UJdUFEtr2NYeLng41x2t8E8CT.webp',
    'https://fbcoverstreet.com/thumbnail/4tjNSJ1gHNBkC3T38tIkxpQ3FsnEyvACQrgnOHrLZCMdg17rbpSIVcxOdpIjfwrU.webp',
    'https://cdn3.geckoandfly.com/wp-content/uploads/2015/04/vegetarian-quotes-diet-food-vegan-03.jpg',
    'https://cdn2.geckoandfly.com/wp-content/uploads/2015/04/vegetarian-quotes-diet-food-vegan-04.jpg'
    
  ];
  
  const zoomOutProperties = {
    indicators: true,
    scale: 0.1
  }
  return (
    <div className='home-gallery-main'>
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%", height:'200px'}}>
            <img style={{ objectFit: "cover", width:"100%", height:'100%', borderRadius:'4px' }} className='image-main' src={each} alt='' />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;