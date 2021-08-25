import React, { useEffect, useState } from 'react'
import {Card, Badge} from 'react-bootstrap'

function Practice({banner, title, rating}) {
    const [ratingColor, setRatingColor]= useState('primary')
    useEffect(()=>{
        if(rating > 8){
            setRatingColor('success')
        }else if(rating > 6){
            setRatingColor('primary')
        }else if(rating >3){
            setRatingColor('warning')
        }else if(rating > 0){
            setRatingColor('danger')
        }
    },[rating])
    return (
        <Card style={{width:'180px'}} className='m-2'>
            <Card.Img src={banner} style={{height:'250px'}}/>
            <Card.Header className='d-flex justify-content-between'>
                <span>{title}</span>
                <Badge pill variant={ratingColor} className='p-2'>{rating}</Badge>
            </Card.Header>
        </Card>
    )
}

export default Practice
