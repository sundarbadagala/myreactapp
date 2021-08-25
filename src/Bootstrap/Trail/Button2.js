import React from 'react'
import Button from 'react-bootstrap/Button'
//import {Button} from 'react-bootstrap'

function Button2() {
    return (
        <div>
            <Button>Click Here</Button>
            <Button variant='secondary'>Click Here</Button>
            <Button variant='info'>Click Here</Button>
            <Button variant='success'>Click Here</Button>
            <Button variant='warning'>Click Here</Button>
            <Button variant='danger'>Click Here</Button>
            <Button variant='light'>Click Here</Button>
            <Button variant='dark'>Click Here</Button>
            <hr/>
            <Button variant='outline-primary'>Click Here</Button>
            <Button variant='outline-secondary'>Click Here</Button>
            <Button variant='outline-info'>Click Here</Button>
            <Button variant='outline-success'>Click Here</Button>
            <Button variant='outline-warning'>Click Here</Button>
            <Button variant='outline-danger'>Click Here</Button>
            <Button variant='outline-light'>Click Here</Button>
            <Button variant='outline-dark'>Click Here</Button>
            <hr/>
            <Button size='lg' className='m-1'>Large</Button>
            <Button className='m-1'>Normal / Medium</Button>
            <Button size='sm' className='m-1'>Small</Button>
            <hr/>
            <Button block>Block</Button>
            <hr/>
            <Button>Not Active</Button>
            <Button active>Active</Button>
            <Button variant='outline-primary'>Not Active</Button>
            <Button variant='outline-primary' active>Active</Button>
            <hr/>
            <Button disabled>Disabled</Button>
        </div>
    )
}

export default Button2
