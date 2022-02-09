import React, {useCallback, useState} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'



function Main() {
    const [age, setAge]= useState(25)
    const [salary, setSalary]= useState(10000)
    
    const incrementAge=useCallback(()=>{
        setAge( age + 1)
    },[age])
    
    const incrementSalary=useCallback(()=>{
        setSalary( salary + 1000)
    },[salary])
    return (
        <div>
            Check console for better understand <hr/>
            <Title/>
            <Count text='Age' value={age} />
            <Button increase='Increment Age' clickHandler={incrementAge}/>
            <Count text='Salary' value={salary} />
            <Button increase='Increment Salary' clickHandler={incrementSalary}/>
        </div>
    )
}

export default Main
