import React from 'react'
import {Container, Jumbotron} from 'react-bootstrap'

function Default(props){
    return(
        <Container className='d-flex justify-content-center align-items-center p-5 mt-5'>
            <Jumbotron className='d-flex justify-content-center align-items-center'>
                <h2 className='text-capitalize font-weight-bold text-danger'>404 error, page not found</h2>
            </Jumbotron>
        </Container>
    )
}
export default Default;