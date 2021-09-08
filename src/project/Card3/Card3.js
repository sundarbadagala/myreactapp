import React from 'react'
import {Wrapper, Main, Header, Logo, Exam, VLine, HLine, ButtonGrid} from './card3Styled'
import isso from './isso.png'

function Card3() {
    return (
        <Wrapper>
            <Logo>
                <img src={isso} alt=''/>
            </Logo>
            <Main>
                <Header>International Standard Science Olympiad</Header>
            <Exam>
                <div className='exam'>
                    <div className='examInfo'>Exam Date</div>
                    <div className='examDetails'>14-Sep-2021</div>
                </div>
                <VLine/>
                <div className='exam'>
                    <div className='examInfo'>Start Time</div>
                    <div className='examDetails'>09:00 AM</div>
                </div>
                <VLine/>
                <div className='exam'>
                    <div className='examInfo'>End Time</div>
                    <div className='examDetails'>10:30 PM</div>
                </div>
                <VLine/>
                <div className='exam'>
                    <div className='examInfo'>Time</div>
                    <div className='examDetails'>60 Mins</div>
                </div>
                <VLine/>
                <div className='exam'>
                    <div className='examInfo'>Questions</div>
                    <div className='examDetails'>40</div>
                </div>
                <VLine/>
                <div className='exam'>
                    <div className='examInfo'>Marks</div>
                    <div className='examDetails'>50</div>
                </div>
            </Exam>
            <HLine/>
            <Exam>
                <div className='exam'>
                    <div className='examInfo'>Model papers</div>
                    <div className='examDetails'>Paper 1 Paper 2</div>
                </div>
                <VLine/>
                <div className='exam'>
                    <div className='examInfo'>Previous Year Sample Paper</div>
                    <div className='examDetails'>PDF Paper</div>
                </div>
                <VLine/>
                <div className='exam'>
                    <div className='examInfo'>Exam Pattern</div>
                    <div className='examDetails'>Download PDF</div>
                </div>
                <VLine/>
                <div className='exam'>
                    <div className='examInfo'>Exam Syllabus</div>
                    <div className='examDetails'>Download PDF</div>
                </div>
            </Exam>
            <ButtonGrid>
                <button className='mock-button'>Start Practice Mock Test</button>
                <button className='test-button'>Take Test</button>
            </ButtonGrid>
            </Main>
        </Wrapper>
    )
}

export default Card3
