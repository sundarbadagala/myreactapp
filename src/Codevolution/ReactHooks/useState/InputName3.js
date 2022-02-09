import React, {useState} from 'react'

function InputName() {
    const [Name, setName] = useState({firstName:'', lastName:''})
    return (
        <div>
            <input 
                type='text' 
                value={Name.firstName}
                onChange={e=> setName({...Name, firstName: e.target.value})} 
            />
            <input 
                type='text' 
                value={Name.lastName}
                onChange={e=> setName({...Name, lastName: e.target.value})}    
            />
            <h3>First Name: {Name.firstName}</h3>
            <h3>Last Name: {Name.lastName}</h3>
        </div>
    )
}

export default InputName
