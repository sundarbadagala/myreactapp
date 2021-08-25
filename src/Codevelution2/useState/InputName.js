import React, {useState} from 'react'

function InputName() {
    const [state, setstate] = useState({
        name:''
    })
    const storeValue=(e)=>{
        setstate({
            name: e.target.value
        })
    }
    return (
        <div>
            <input 
                type='text'
                value={state.name}
                onChange={storeValue}
            /><br/>
            {state.name}
        </div>
    )
}

export default InputName
