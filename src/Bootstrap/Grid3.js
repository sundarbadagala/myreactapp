import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const styles={
    border:'1px solid black',
    background:'pink'
}

function Grid3() {
    return (
        <Container fluid>
            {/*
                firstly the content will show which are not under/ not specified order i.e Second and Fourth
                next the ordered content will show based on their order number
            */}
            <Row>
                <Col md={{order:2}} style={styles}>First</Col>
                <Col style={styles}>Second</Col>
                <Col md={{order:1}} style={styles}>Third</Col>
                <Col style={styles}>Fourth</Col>
            </Row>
            <br/>
            {/*
                up to medium size the 4-firstContent 4-whiteSpace 4-secondContent
                up to medium size the 6-firstContent 2-whiteSpace 4-secondContent
            */}
            <Row>
                <Col md={4} sm={6} style={styles}>First</Col>
                <Col md={{offset:4, span:4}} sm={{offset:2, span:4}} style={styles}>Second</Col>
            </Row>
            <br/>
            {/*
                up to large size the number of columns would be 3 and we have real 3 cols so all 3 cols automatically adjusted to screen
                up to medium size the number of columns would be 4 but we have real 3 cols so all 3 cols adjusted and extra space(which is equal to 4th col space) left
                up to small size the number of columns would be 5 but we have real 3 cols so all 3 cols adjusted and extra space(which is equal to 4th and 5th col space) left
            */}
            <Row lg={3} md={4} sm={5}>
                <Col style={styles}>1 of 3</Col>
                <Col style={styles}>2 of 3</Col>
                <Col style={styles}>3 of 3</Col>
            </Row>
        </Container>
    )
}

export default Grid3
