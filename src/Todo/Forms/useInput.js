import { useState } from 'react'

function useInput(inititalValue){
    const [value, setValue]= useState(inititalValue)
    const reset=()=>{
        setValue('')
    }
    const bind={
        value,
        onChange: e=> setValue(e.target.value)
    }
    return [value, bind, reset]
}
export default useInput;