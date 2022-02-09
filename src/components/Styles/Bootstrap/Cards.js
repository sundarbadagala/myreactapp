import React from 'react'
import {Card, Button, ListGroup} from 'react-bootstrap'

function Main() {
    return (
        <div>
            <Card style={{width:'200px'}}>
                <Card.Img src='https://i0.wp.com/www.kahanihindi.com/wp-content/uploads/2020/02/Whatsapp-DP-images-1.jpg?resize=450%2C400&ssl=1'/>
                <Card.Body>
                    <Card.Title>
                        Card Title
                    </Card.Title>
                    <Card.Subtitle>
                        Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                        This si the Card Text to write something about the poster
                    </Card.Text>
                    <Card.Link href='#'>
                        Card Link
                    </Card.Link>
                    <br/>
                    <Button>
                        Button
                    </Button>
                </Card.Body>
            </Card>


            <hr/>
            <Card style={{width:'200px'}}>
                <Card.Header>Card Header</Card.Header>
                <ListGroup>
                    <ListGroup.Item>List Group Item</ListGroup.Item>
                    <ListGroup.Item>List Group Item</ListGroup.Item>
                    <ListGroup.Item>List Group Item</ListGroup.Item>
                </ListGroup>
            </Card>
            <hr/>
            <Card style={{width:'200px'}}>
                <Card.Header>Card Header</Card.Header>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle>Card Subtitle</Card.Subtitle>
                    <Card.Text>Card Text</Card.Text>
                </Card.Body>
            </Card>
            <hr/>
            <Card style={{width:'500px'}}>
                <Card.Header>Jeevita Satyam</Card.Header>
                <Card.Body>
                    <blockquote className='blockquote'>
                        <p>Aak is Paak, Paak is Aak. So Aak paak Karepak</p>
                        <footer className='blockquote-footer'>Sundar Rao</footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <hr/>
            <Card className='text-center' style={{width:'500px'}}>
                <Card.Header>This is the Card Header</Card.Header>
                <Card.Body>
                    <Card.Title>This is the Card Title</Card.Title>
                    <Card.Text>This is the Card Text</Card.Text>
                    <Button>Click Here</Button>
                </Card.Body>
                <Card.Footer>This is card Card Footer</Card.Footer>
            </Card>
            <hr/>
            <Card style={{width:'500px'}} className='bg-dark text-white'>
                <Card.Img src='https://i.pinimg.com/originals/6a/8b/50/6a8b50ac0aa0e64f224bcee2f0afbd66.jpg'/>
                <Card.ImgOverlay>
                    <Card.Title>This is Card Title</Card.Title>
                    <Card.Text>This is Card Text</Card.Text>
                    <Card.Text>This is Card Text</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Main
