function IncrementOne(count, setCount, initialValue,initialIncrement, initialDecrement) {
    const increment = ()=>{
        setCount(count + initialIncrement)
    }
    const decrement = ()=>{
        setCount(count - initialDecrement)
    }
    const reset = ()=>{
        setCount(initialValue)
    }
    return[increment, decrement, reset]
}

export default IncrementOne
