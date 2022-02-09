import React,{useState} from 'react'


function Index() {
    const fileds={name:'', number:''}
    const [value, setValue]= useState([{key:1, ...fileds}])
    const [data, setData]= useState([])
    const nameHandler=(text, key)=>{
        // eslint-disable-next-line array-callback-return
        value.map(item => {
            if(item.key === key){
                item.name= text.value
            }
        })
        setValue([...value])
    }
    const numberHandler=(text, key)=>{
        // eslint-disable-next-line array-callback-return
        value.map(item => {
            if(item.key === key){
                item.number= text.value
            }
        })
        setValue([...value])

    }
    const addForm=()=>{
        setValue([...value, {key:Date.now(), ...fileds}])
    }
    const deleteForm=(e, key)=>{
        setValue(value.filter(item => item.key !== key))
    }
    const submitForm=()=>{
        setData(JSON.stringify(value) )  
    }
    return (
        <div>
           {
               value.map(item => 
                        <div key={item.key}>
                        <Form {...item} nameHandler={(e)=>nameHandler(e.target, item.key)} numberHandler={(e)=>numberHandler(e.target, item.key)}/>
                        {
                            value.length !==1 && <button onClick={(e)=>deleteForm(e, item.key)}>Delete Form</button>
                        }
                        </div>
                    )
           }
           <button onClick={addForm}>Add Form</button>
           <button onClick={submitForm}>Submit Form</button><br/>
           {
               data
           }
        </div>
    )
}

export default Index


export const Form = ({name, number, nameHandler, numberHandler}) =>{
    return(
        <div>
            <input type='text' value={name} onChange={nameHandler}/>
            <input type='text' value={number} onChange={numberHandler}/>
        </div>
    )
}