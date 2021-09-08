import React from 'react'
import {Details, Logo, Wrapper, ButtonPrimary, ButtonSecondary} from './cardStyled'
import school from './school.svg'

function Card() {
    return (
        <Wrapper>
            <Logo>
                <img src={school} alt=''/>
            </Logo>
            <Details>
                <div className='details-header'>For Schools</div>
                <div className='details-info'>School Principals/Admins can get their schools registered into CNAPS School and get some benefits. Try to get your school registered with us for bulk student registrations.</div>
                <div className='details-btns'>
                    <ButtonPrimary>
                        School registration
                    </ButtonPrimary>
                    <ButtonSecondary>
                        School Login
                    </ButtonSecondary>
                </div>
            </Details>
        </Wrapper>
    )
}

export default Card
