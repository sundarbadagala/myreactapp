import React from 'react'

function Forms({addItems, setName, Name}) {
    return (
        <div>
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
        </div>
    )
}

export default Forms
