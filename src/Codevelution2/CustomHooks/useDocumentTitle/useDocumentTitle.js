import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(()=>{
        document.title= `Counting ${count}`
    },[count])
}

export default useDocumentTitle
