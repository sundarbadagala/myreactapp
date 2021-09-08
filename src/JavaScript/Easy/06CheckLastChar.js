import React from 'react'

function App() {
    const str = 'man'
    // --------------------First Method-----------------
    const Main=(str)=>{
        var l = str.length
        return str[l-1]==='n'
    }
    // --------------------First Method-----------------
    const Main2=(str)=>{
        return str.endsWith('n')
    }

    console.log(Main(str))
    console.log(Main2(str))
    return (
        <div>
            Check the last Charecter<br/>
            check the last charecter of string is 'n' or not<br/>
            <code>
            input: Arun<br/>
            outpu: true<br/><br/>
            input: Amar<br/>
            output: false<br/><br/>
            input: Jan<br/>
            output: true
            </code>
        </div>
    )
}

export default App
