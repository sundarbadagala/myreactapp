import React, {useState} from 'react'
import {Header, Card, Title, Info, InfoName, InfoValue, InfoDetails, Select, SelectInput, Exams, CheckBox, ExamFee, ExamCost, ExamStudents, VectorI, VectorS, VectorM, VectorO, ExamsStudentsValue} from './cardStyled'
import ISMO from './ISMO.svg'

function Item() {
    const [value, setValue]= useState(false)
    const changeHandler=()=>{
        setValue(!value)
    }
    console.log(value)
    return (
        <Card bgColor={value ? '#ffebf3' : '#ffffff'}>
            <Header>
                <img className='logo' src={ISMO} alt=''/>
            </Header>
            <Info>
                <Title>International Standard Mathematical Olympiad</Title>
                <InfoDetails>
                    <div>
                        <InfoName>Class:</InfoName><InfoValue>1st -10th</InfoValue> 
                    </div>
                    <div>
                        <InfoName>Marks:</InfoName><InfoValue>60</InfoValue>    
                    </div>
                    <div>
                    <InfoName>Questions:</InfoName><InfoValue>60</InfoValue>    
                    </div>
                    <div>
                    <InfoName>Time:</InfoName><InfoValue>60</InfoValue>
                    </div>    
                </InfoDetails>
                <Select>
                    Select Data: 
                    <SelectInput>
                        <option>Select</option>
                    </SelectInput>
                </Select>    
            </Info>
            <Exams>
                <CheckBox>
                    <input className='checkbox' type='checkbox' value={value} onChange={changeHandler}/> Select
                </CheckBox>
                <ExamFee>
                    Exam Fee
                </ExamFee>
                <ExamCost>
                    250/-
                </ExamCost>
                <ExamStudents>
                    Student Registered:
                    <ExamsStudentsValue>5665</ExamsStudentsValue>
                </ExamStudents>
            </Exams>
        </Card>
    )
}

export default Item
