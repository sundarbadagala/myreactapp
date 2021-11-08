import React,{useState} from 'react'


function Index() {
    const fileds={name:'', number:''}
    const [value, setValue]= useState([{key:1, ...fileds}])
    // const nameHandler=(text, key)=>{
    //     // eslint-disable-next-line array-callback-return
    //     value.map(item => {
    //         if(item.key === key){
    //             item.name= text.value
    //         }
    //     })
    //     setValue([...value])
    // }
    // const numberHandler=(text, key)=>{
    //     // eslint-disable-next-line array-callback-return
    //     value.map(item => {
    //         if(item.key === key){
    //             item.number= text.value
    //         }
    //     })
    //     setValue([...value])

    // }
    const changeHandler=(text, key)=>{
    // eslint-disable-next-line array-callback-return
    value.map(item => {
        if(item.key === key){
                setValue([
                   
                    {
                        [text.name]: text.value
                    }
                ])
        }
        setValue([...value])
    })
    
}
    const addForm=()=>{
        setValue([...value, {key:Date.now(), ...fileds}])
    }
    console.log(value)
    return (
        <div>
           {
               value.map(item => 
                        <Form {...item} changeHandler={(e)=>changeHandler(e.target, item.key)} />
                    )
           }
           <button onClick={addForm}>Add</button>
        </div>
    )
}

export default Index


export const Form = ({name, number, changeHandler}) =>{
    return(
        <div>
            <input type='text' name='name' value={name} onChange={changeHandler}/>
            <input type='text' name='number' value={number} onChange={changeHandler}/>
        </div>
    )
}