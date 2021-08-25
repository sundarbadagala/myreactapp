import React from 'react'
import {Media} from 'react-bootstrap'

const styles={
    border:'1px solid black'
}

function Main() {
    return (
        <Media style={styles}>
            <img
            width={100}
            height={100}
            className="mr-3" //mr means margin 3px
            src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png"
            alt="Generic placeholder"
        />
            <Media.Body>
              <h5>Media Heading</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
        </Media>
    )
}

export default Main
