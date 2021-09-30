import React from 'react'
import {
    Wrapper, 
    Button, 
    ButtonPrimary, 
    ButtonSecondary, 
    ButtonDark
} from './Button4styles'


function Button3() {
    return (
        <Wrapper>
            <Button>
                Click Here
            </Button>        
            <ButtonPrimary>
                Primary
            </ButtonPrimary>
            <ButtonSecondary>
                Secondary
            </ButtonSecondary>
            <ButtonDark>
                Dark
            </ButtonDark>
        </Wrapper>
    )
}

export default Button3
