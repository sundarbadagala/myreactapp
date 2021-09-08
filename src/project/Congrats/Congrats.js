import React from 'react'
import {Wrapper, Main, Button, Message, Header, Image, Receipt} from './congratsStyled'
import logo from './35 1.png'
import receipt from './file-text.svg'

function Congrats() {
    return (
        <Wrapper>
            <Receipt>
                <img className='receipt' src={receipt} alt='' />
                Download Receipt
            </Receipt>
            <Main>
                <Image src={logo} alt='' />
                <Header>Congratulations</Header>
                <Message>Your payment has been successfully compled!!!</Message>
                <Button>Go to Home</Button>
            </Main>
        </Wrapper>
    )
}

export default Congrats
