import React, { useState } from 'react'
import Form from './form'

function Form2() {
    const [Name, setName]= useState({name:'', number:''})
    const [nameList, setNameList]= useState([{key:1, name:'', number:''}])
    const addItems=(e)=>{
        e.preventDefault()
        
            setNameList([...nameList, {key:Date.now(), name:Name.name, number:Name.number}])
            setName({name:'', number:'' })
        
    }
    
    const changeUpdate=(text, key)=>{
        // eslint-disable-next-line array-callback-return
        nameList.map(item=> {
            if(item.key === key){
                item.name= text;
            }
        })
        setNameList([...nameList])
    }
    const changeNumberUpdate=(text, key)=>{
        // eslint-disable-next-line array-callback-return
        nameList.filter(item => {
            if(item.key === key){
                item.number= text;
            }
        })
        setNameList([...nameList])
    }
    console.log(nameList)
    return (
        <div className='cont-main'>
            <ul className='cont-menu'>
            {
                nameList.map(item=> 
                    <li className='cont-list' key={item.key}>
                    <div key={item.key} className='cont-div'>
                        <input 
                            type='text' 
                            id={item.key} 
                            value={item.name} 
                            onChange={(e)=>changeUpdate(e.target.value, item.key)}
                            className='cont-name'
                            
                        />
                        <input 
                            type='text' 
                            id={item.key} 
                            value={item.number}
                            onChange={(e)=>changeNumberUpdate(e.target.value, item.key)}
                            className='cont-number'
                            
                        />
                    </div> 
                    </li>
                )
            }
            </ul>
            <Form addItems={addItems} setName={setName} Name={Name}/>
            
            
        </div>
    )
}

export default Form2
