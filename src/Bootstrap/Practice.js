import React from 'react'
import {Row, Col, Tab, ListGroup} from 'react-bootstrap'

function Practice() {
    const imgOne = 'https://i.pinimg.com/originals/c6/22/46/c62246425d2c45d07ff2ad24ecd620cc.jpg'
    const imgTwo = 'https://www.designyourway.net/blog/wp-content/uploads/2018/01/3d-Desktop-Backgrounds.jpg'
    const imgThree = 'https://wallpaperaccess.com/full/43654.jpg'
    return (
        <div className='m-2'>
             <Tab.Container defaultActiveKey='#link1'>
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href='#link1'>link One</ListGroup.Item>
                            <ListGroup.Item action href='#link2'>link One</ListGroup.Item>
                            <ListGroup.Item action href='#link3'>link One</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey='#link1'>This Content about first link</Tab.Pane>
                            <Tab.Pane eventKey='#link2'>This Content about first link</Tab.Pane>
                            <Tab.Pane eventKey='#link3'>This Content about first link</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
             </Tab.Container>
        </div>
    )
}

export default Practice
