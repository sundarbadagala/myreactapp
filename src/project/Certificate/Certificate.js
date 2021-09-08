import React from 'react'
import {Wrapper, MainBar, Logo, Click, MainCard, MainCardLogo, MainCardInfo, MainCardDetails, ExamDetailsName, ExamDetailsValue, Result, Button, Main, Line, MockTest, MockTestLogo, MockTestPractice, Exams, VLine, HLine, Instruction} from './certStyled'
import logo from './cert.png'
import isso from './isso.png'
import doc from './doc.svg'
import mock from './mock.svg'
import model from './model.svg'
import modelDoc from './model-doc.svg'

function Certificate() {
    return (
        <Wrapper>
            <MainBar>
                <Logo>
                    <img className='logo' src={logo} alt=''/>
                    <span className='heading'>Certificate</span>
                </Logo>
                <Click>
                    click here to View <i class="fas fa-chevron-right"></i>
                </Click>
            </MainBar>
            <Main>
            <MainCard>
                <MainCardLogo>
                    <img src={isso} alt=''/>
                </MainCardLogo>
                <MainCardInfo>
                    <div className='header'>
                        International Standard Science Olympiad
                    </div>
                    <MainCardDetails>
                        <div>
                            <div>
                                <ExamDetailsName>Date:</ExamDetailsName>
                                <ExamDetailsValue>14-Feb-2021</ExamDetailsValue>
                            </div>
                            <div className='mainCardDetails'>
                                <ExamDetailsName>Start time:</ExamDetailsName>
                                <ExamDetailsValue>09:00AM</ExamDetailsValue>
                            </div>
                            <div className='mainCardDetails'>
                                <ExamDetailsName>EXam Pattern:</ExamDetailsName>
                                <ExamDetailsValue> 
                                    <img src={doc} alt=''/> 
                                    View PDF
                                </ExamDetailsValue>
                            </div>
                        </div>
                        <div>
                            <div>
                                <ExamDetailsName>End time:</ExamDetailsName>
                                <ExamDetailsValue>10:30PM</ExamDetailsValue>
                            </div>
                            <div className='mainCardDetails'>
                                <ExamDetailsName>Questions:</ExamDetailsName>
                                <ExamDetailsValue>40</ExamDetailsValue>
                            </div>
                            <div className='mainCardDetails'>
                                <ExamDetailsName>Exam Syllabus:</ExamDetailsName>
                                <ExamDetailsValue>
                                    <img src={doc} alt=''/> 
                                    View PDF
                                </ExamDetailsValue>
                            </div>
                        </div>
                        <div>
                        <div>
                            <ExamDetailsName>Mins:</ExamDetailsName>
                            <ExamDetailsValue>60</ExamDetailsValue>
                        </div>
                        <div className='mainCardDetails'>
                            <ExamDetailsName>Marks:</ExamDetailsName>
                            <ExamDetailsValue>50</ExamDetailsValue>
                        </div>
                        </div>
                    </MainCardDetails>
                </MainCardInfo>
                <Result>
                    <Button>View Result</Button>
                </Result>
            </MainCard>
            <Line/>
            <Exams>
            <div>
            <MockTest>
                <MockTestLogo>
                    <img className='logo' src={mock} alt=''/>
                    <span className='heading'>Mock Test</span>
                </MockTestLogo>
                <MockTestPractice>
                    Start Practice <i class="fas fa-chevron-right"></i>
                </MockTestPractice>
                
            </MockTest>
            <HLine/>
            </div>
            <div>
            <VLine/>
            </div>
            <div>        
            <MockTest>
                <MockTestLogo>
                    <img className='logo' src={model} alt=''/>
                    <span className='heading'>Model Question Paper</span>
                </MockTestLogo>
                <MockTestPractice>
                    <img className='mockTestDoc' src={modelDoc} alt=''/>Peview 
                </MockTestPractice>
            </MockTest>
            <HLine/>
            </div>
            </Exams>
            <Instruction>
                <h3 className='heading'>Instructions</h3>
                <ul className='list'>
                    <li>Lorem Ipsum, giving information on its origns's, as well as a random</li>
                    <li>Many desktop publishing packages and web page editors</li>
                    <li>The point of  using Lorem Ipsum is that it has.</li>
                    <li>Lorem Ipsum, you need to be sure there isn't anyting embar</li>
                    <li>Richard Mcclintock, a Latin professor at hampden-Sydney College in </li>
                    <li>By injected humour, or randomised words which don't look even</li>
                </ul>
            </Instruction>
            </Main>
        </Wrapper>
    )
}

export default Certificate
