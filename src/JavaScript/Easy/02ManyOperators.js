import React from 'react'

function App() {
    const calc=(num1, num2, operator)=>{
        // eslint-disable-next-line no-eval
        const result = eval(num1 + operator + num2)
        console.log(`${num1}${operator}${num2} = ${result}`)
    }
    calc(3,2,'+')
    calc(3,2,'-')
    calc(3,2,'*')
    calc(3,2,'/')
    return (
        <div>
            Many operators<br/>
            <code>
                input : (three values) 1,2,'+'<br/>
                output: 1+2 = 3<br/><br/>
                input : (three values) 4,2,'-'<br/>
                input : 4-2 = 2
            </code>
        </div>
    )
}

export default App
