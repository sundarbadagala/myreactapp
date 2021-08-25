import React from 'react'
import {Row, Col, Tab, ListGroup} from 'react-bootstrap'


function Tabing() {
    return (
        <div>
            <Tab.Container defaultActiveKey='#link1' id='tabbin-list'>
                <Row>
                    <Col md={4}>
                        <ListGroup>
                            <ListGroup.Item action href='#link1'>Link One</ListGroup.Item>
                            <ListGroup.Item action href='#link2'>Link Two</ListGroup.Item>
                            <ListGroup.Item action href='#link3'>Link Three</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey='#link1'>This content about Link One</Tab.Pane>
                            <Tab.Pane eventKey='#link2'>This content about Link One</Tab.Pane>
                            <Tab.Pane eventKey='#link3'>This content about Link One</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Tabing
