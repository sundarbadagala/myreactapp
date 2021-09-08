import React from 'react'
import {Header, Card, Title, Info, InfoName, InfoValue, InfoDetails, Select, Exams, ExamFee, ExamCost} from './card2Styled'
import ISMO from './ISMO.svg'

function Item() {
    return (
        <Card>
            <Header>
                <img className='logo' src={ISMO} alt=''/>
            </Header>
            <Info>
                <Title>International Standard Mathematical Olympiad</Title>
                <InfoDetails>
                    <div>
                        <InfoName>Class:</InfoName>
                        <InfoValue>1st -10th</InfoValue> 
                    </div>
                    <div>
                        <InfoName>Marks:</InfoName>
                        <InfoValue>60</InfoValue>    
                    </div>
                    <div>
                        <InfoName>Questions:</InfoName>
                        <InfoValue>60</InfoValue>    
                    </div>
                    <div>
                        <InfoName>Time:</InfoName>
                        <InfoValue>60</InfoValue>
                    </div>    
                </InfoDetails>
                <Select>
                    <span className='note'>Note:</span> If you also want to participate in this exam along with other students, please contact your Priciple/Admin
                </Select>    
            </Info>
            <Exams>
                
                <ExamFee>
                    Student Registered
                </ExamFee>
                <ExamCost>
                    43,453
                </ExamCost>
                
            </Exams>
        </Card>
    )
}

export default Item
