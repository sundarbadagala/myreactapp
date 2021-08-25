import React, {useState} from 'react'

function AddValue() {
    const [state, setstate] = useState([])
    const addItem=()=>{
        setstate([...state, {
            id:state.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add</button>
            <ul>
            {
                state.map( item => 
                        <li key={item.id}>{item.value}</li>
                    )
            }
            </ul>
        </div>
    )
}

export default AddValue
