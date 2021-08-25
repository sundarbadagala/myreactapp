import React from 'react'
import {Alert} from 'react-bootstrap'

const styles={
    border:'1px solid gray'
}

function Main() {
    return (
        <div>
            <Alert variant='primary'>
                <Alert.Heading>Hello World</Alert.Heading>
                <Alert.Link href='https://mail.google.com/mail/u/0/#inbox' target='_blank'>This is the link</Alert.Link>
                <p>this is the alet content</p>
                <p className='m-3 pl-5' style={styles}>this is the alet extra content</p>
                {/*
                    m - margin 1-5 only
                    mr - margin right 
                    ml - margin left
                    mb - margin bottom
                    mt - margin top

                    p - padding 1-5 only
                    pr - padding right 
                    pl - padding left
                    pb - padding bottom
                    pt - padding top
                */}
            </Alert>
        </div>
    )
}

export default Main
