import React from 'react'
import {Wrapper, Container, Title, Content} from './ContentStyles'

function Example() {
    return (
        <Wrapper>
            <Container>
                <Title>Title one</Title>
                <Content>this is the content about first chapter</Content>
            </Container>
            <Container>
                <Title>Title Two</Title>
                <Content>this is the content about second chapter</Content>
            </Container>
            <Container>
                <Title>Title Three</Title>
                <Content>this is the content about third chapter</Content>
            </Container>
        </Wrapper>
    )
}

export default Example
