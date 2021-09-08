import React from 'react'
import {Header, Title, Wrapper, Info, SingleInfo, List, Footer, Button} from './cardStyled'
import ISKO from './ISKO.svg'

function Card() {
    return (
        <Wrapper>
            <Header>
                <img src={ISKO} alt='' className='header-logo'/>
                <div className='header-details'>
                    <span className='header-exam'>Exam Fee</span>
                    <span className='header-fee'>200/-</span>
                </div>
            </Header>
            <Title>
                International Standard Knowledge Olympiad
            </Title>
            <Info>
                    <SingleInfo>
                        <div className='singleinfo-title'>Class</div>
                        <div className='singleinfo-details'>1st-10th</div>
                    </SingleInfo>
                    <SingleInfo border>
                        <div className='singleinfo-title'>Exam Time</div>
                        <div className='singleinfo-details'>90 mins</div>
                    </SingleInfo>
                    <SingleInfo border>
                        <div className='singleinfo-title'>Marks</div>
                        <div className='singleinfo-details'>90</div>
                    </SingleInfo>
                    <SingleInfo>
                        <div className='singleinfo-title'>Exam Dates:</div>
                        <div className='singleinfo-details'></div>
                    </SingleInfo>
                    <SingleInfo>
                        <div className='singleinfo-details'>Phase-1</div>
                        <div className='singleinfo-details'>21-Feb-2021</div>
                    </SingleInfo>
                    <SingleInfo border>
                        <div className='singleinfo-details'>Phase-2</div>
                        <div className='singleinfo-details'>21-Feb-2021</div>
                    </SingleInfo>
            </Info>
            <List>
                <li>Mock Test</li>
                <li>Model papers</li>
                <li>Previous Year Sample Paper</li>
                <li>Exam Pattern</li>
                <li>Exam Syllabus</li>
            </List>
            <Footer>
                <div className='footer-more'>More Info...</div>
                <Button>Buy Now <i className="fas fa-arrow-right"></i></Button>
            </Footer>
        </Wrapper>
    )
}

export default Card
