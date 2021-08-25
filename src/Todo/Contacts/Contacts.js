import React, { useState } from 'react'
import './Contact.css'

function Form2() {
    // const [searchButton, setSearchButton]= useState(false)
    // const [searchNameList, setSearchNameList]= useState([])
    // const [editBtn, setEditBtn]= useState('cont-edit')
    // const [search, setSearch]= useState('')
    const [change, setChange]= useState(false)
    const [Name, setName]= useState({name:'', number:''})
    const [nameList, setNameList]= useState([])
    const addItems=(e)=>{
        e.preventDefault()
        if(Name.name !== '' && Name.number !== ''){
            setNameList([...nameList, {key:Date.now(), name:Name.name, number:Name.number}])
            setName({name:'', number:'' })
        }
    }
    const deleteItem=(key)=>{
        setNameList(nameList.filter(item => item.key !== key))
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
    const changeEdit=()=>{
        setChange(!change)
    }
    // const searchName=()=>{
    //     const searchName= nameList.filter(item => item.name === search)
    //     setSearchNameList([...searchNameList, searchName])
    //     setSearchButton(!searchButton)
        
    // }
    return (
        <div className='cont-main'>
            <div className='cont-title'>Contact Manager</div>
            <form onSubmit={addItems} className='cont-form'>
                <input
                    type='text'
                    value={Name.name}
                    onChange={e=>setName({...Name, name:e.target.value})}
                    placeholder='Contact Name'
                    className='form-name'
                />
                <input
                    type='number'
                    value={Name.number}
                    onChange={e=>setName({...Name, number:e.target.value})}
                    placeholder='Contact Number'
                    className='form-number'
                />
                <button 
                    type='submit'
                    className='form-button'
                >
                    Add
                </button>
            </form>
            
            <ul className='cont-menu'>
            {
                // searchButton? searchNameList :
                nameList.map(item=> 
                    <li className='cont-list'>
                    <div key={item.key} className='cont-div'>
                        <input 
                            type='text' 
                            id={item.key} 
                            value={item.name} 
                            onChange={change? (e)=>changeUpdate(e.target.value, item.key): null}
                            className='cont-name'
                            onBlur={()=>setChange(false)}
                        />
                        <input 
                            type='text' 
                            id={item.key} 
                            value={item.number}
                            onChange={change? (e)=>changeNumberUpdate(e.target.value, item.key):null}
                            className='cont-number'
                            onBlur={()=>setChange(false)}
                        />
                        <i className='fas fa-trash cont-delete' onClick={()=>deleteItem(item.key)}/>
                        <i className='fas fa-edit cont-edit' onClick={changeEdit} />
                    </div> 
                    </li>
                )
            }
            </ul>
        </div>
    )
}

export default Form2
