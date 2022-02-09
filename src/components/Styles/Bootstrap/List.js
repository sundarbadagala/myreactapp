import React from 'react'
import {ListGroup} from 'react-bootstrap'

function Listing() {
    return (
        <div className='m-4' style={{width:'500px'}}>
            <ListGroup className='mb-2'>
                <ListGroup.Item>Apple</ListGroup.Item>
                <ListGroup.Item>Banana</ListGroup.Item>
                <ListGroup.Item>Orange</ListGroup.Item>
                <ListGroup.Item>Grapes</ListGroup.Item>
            </ListGroup>
            <ListGroup className='mb-2'>
                <ListGroup.Item variant='primary'>Dog</ListGroup.Item>
                <ListGroup.Item variant='danger'>Cat</ListGroup.Item>
                <ListGroup.Item variant='success'>Cow</ListGroup.Item>
                <ListGroup.Item variant='warning'>Rat</ListGroup.Item>
            </ListGroup>
            <ListGroup className='mb-2'>
                <ListGroup.Item action variant='primary'>Car</ListGroup.Item>
                <ListGroup.Item action variant='danger'>Bus</ListGroup.Item>
                <ListGroup.Item action variant='success'>Bike</ListGroup.Item>
                <ListGroup.Item action variant='warning'>Cycle</ListGroup.Item>
            </ListGroup>
            <ListGroup className='mb-2'>
                <ListGroup.Item active >Active</ListGroup.Item>
                <ListGroup.Item disabled>Disabled</ListGroup.Item>
                <ListGroup.Item action >Action</ListGroup.Item>
                <ListGroup.Item >Normal</ListGroup.Item>
            </ListGroup>
            <ListGroup className='mb-2'>
                <ListGroup.Item action href='https://www.youtube.com/' target='_blank'>Link</ListGroup.Item>
                <ListGroup.Item action onClick={()=>alert('on click alert')}>onClick</ListGroup.Item>
            </ListGroup>
            <ListGroup variant='flush' className='m-2'>
                <ListGroup.Item>No</ListGroup.Item>
                <ListGroup.Item>Outline</ListGroup.Item>
                <ListGroup.Item>Borders</ListGroup.Item>
                <ListGroup.Item>Here</ListGroup.Item>
            </ListGroup>
            <ListGroup variant='horizontal'>
                <ListGroup.Item action >horizontal</ListGroup.Item>
                <ListGroup.Item action >list</ListGroup.Item>
                <ListGroup.Item action >items</ListGroup.Item>
                <ListGroup.Item action >Here</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Listing
