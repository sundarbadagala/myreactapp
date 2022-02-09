import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const styles={
    border:'1px solid black'
}

function Grid3() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col  style={styles}>width 3/12</Col>
                    <Col  style={styles}>width 3/12</Col>
                    <Col  style={styles}>width 3/12</Col>
                    <Col  style={styles}>width 3/12</Col>
                </Row>
                <br/>
                <Row>
                    <Col md={2}  style={styles}>width 2/12</Col>
                    <Col md={4}  style={styles}>width 4/12</Col>
                    <Col md={4}  style={styles}>width 4/12</Col>
                    <Col md={2}  style={styles}>width 2/12</Col>
                </Row>
                <br/>
                <Row className='justify-content-center'>
                    <Col sm={1}  style={styles}>width 2/12</Col>
                    <Col sm={1}  style={styles}>width 4/12</Col>
                    <Col sm={1}  style={styles}>width 4/12</Col>
                    <Col sm={1}  style={styles}>width 2/12</Col>
                </Row>
                <br/>
                <Row>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                    <Col xs={1}  style={styles}>width 1/12</Col>
                </Row>
                <br/>
                <Row>
                    <Col style={styles} md>1 of 3</Col>
                    <Col style={styles} md='auto'>Variable width content </Col>
                    <Col style={styles} md>3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Grid3
