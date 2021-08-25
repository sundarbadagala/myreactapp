import React from 'react'
import {Container} from 'react-bootstrap'

const styles={
    border:'1px solid black'
}

function Division() {
    return (
        <div >
            <Container style={styles}>
                Hello
            </Container>
            <Container fluid style={styles}>
                Hello
            </Container>
            <Container fluid style={styles} className='m-5'>
                Hello
            </Container>
        </div>
    )
}

export default Division
