import React from 'react'

function App() {
    const calc=(num1, num2, operator)=>{
        // eslint-disable-next-line no-eval
        const result = operator==='/' && !num2 ? "Can't divide by 0" :  eval(num1 + operator + num2)
        console.log(result)
    }
    calc(1,0,'/')
    // console.log(eval(2+'+'+3+'-'+1+'+'+10))
    return (
        <div>
            Basic Calculator
        </div>
    )
}

export default App
