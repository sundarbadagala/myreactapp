import React, {useState} from 'react'

function InputName2() {
    const [state, setstate] = useState({
        firstName:'',
        lastName:''
    })
    const changeHandler=(e)=>{
        const {name, value}= e.target
        setstate({
            ...state, 
            [name]: value
        })
    }
    return (
        <div>
            input text CLASS style<hr/>
            <input 
                type='text'
                value={state.firstName}
                name='firstName'
                onChange={changeHandler}
            />
            <input
                type='text'
                value={state.lastName}
                name='lastName'
                onChange={changeHandler}
            />
            {state.firstName} {state.lastName}
        </div>
    )
}

export default InputName2
