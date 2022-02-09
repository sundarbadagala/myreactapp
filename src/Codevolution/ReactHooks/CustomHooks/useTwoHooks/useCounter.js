function IncrementOne(count, setCount, incrementValue) {
    const increment = () =>{
        setCount(count + incrementValue)
    }
    return [increment]
}

export default IncrementOne
