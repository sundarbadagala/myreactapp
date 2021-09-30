import {useEffect} from 'react'

function IncrementOne(count) {
    useEffect(()=>{
        document.title= `Count ${count}`
    }, [count])
}

export default IncrementOne
