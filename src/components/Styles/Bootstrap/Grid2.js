import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const styles={
    border:'1px solid black'
}

function Grid2() {
    return (
        <Container fluid>
            <Row>
                <Col style={styles}>Aak paak karepak </Col>
                <Col style={styles}>This value automatically fit to grid </Col>
                <Col style={styles}>my name is raju, i am from srikakulam, i am studying first class in diploma </Col>
            </Row>
            <br/>
            <Row>
                <Col style={styles}>First </Col>
                <Col style={styles} md='auto'>my name is raju, i am from srikakulam, i am studying first class in diploma.  </Col>
                <Col style={styles}>First </Col>
            </Row>
        </Container>
    )
}

export default Grid2
