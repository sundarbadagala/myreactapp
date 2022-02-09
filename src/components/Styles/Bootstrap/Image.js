import React from 'react'
import {Image} from 'react-bootstrap'

function Photos() {
    const imgOne = 'https://i.pinimg.com/236x/20/62/69/20626905851e066e66764c3385fa4352.jpg'
    return (
        <div className='m-2'>
            <Image src={imgOne} alt='' width={200} className='mr-5'/>
            <Image src={imgOne} alt='' width={200} rounded className='mr-5'/>
            <Image src={imgOne} alt='' width={200} roundedCircle className='mr-5'/>
            <Image src={imgOne} alt='' width={200} thumbnail/>
        </div>
    )
}

export default Photos
