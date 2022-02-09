import {useEffect} from 'react'

function Counter(count, setCount) {
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [count])
}

export default Counter
