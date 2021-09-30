import React from 'react'

function App() {
    const date = '27/09/2021'
    const result = /^\d{2}\/\d{2}\/\d{4}$/i.test(date)
    console.log(result)

    const date2 = '27-09-2021'
    const result2 = /^\d{2}-\d{2}-\d{4}$/i.test(date2)
    console.log(result2)

    const date3= '27092021'
    const result3 = /^\d{8}$/i.test(date3)
    console.log(result3)

    const date4= '1632767683161'
    const result4 = /^\d{13}$/i.test(date4)
    console.log(result4)

    
    return (
        <div>
            
        </div>
    )
}

export default App
