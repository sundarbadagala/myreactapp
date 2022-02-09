import React from 'react'

function App() {
    const relation = "2=2" // should return true
    const relation2= "3<1"
    const relation3= "3=1"
    const Main=(value)=>{
        const result = eval(value.replace("=","==="))
        console.log(result)
    }
    Main(relation2)
    return (
        <div>
            String relation to math relation<br/>
            <code>
            Input : "2=2"<br/>
            Output: true <br/><br/>
            Input : "1 &gt; 3" <br/>
            Output : false
            </code>
        </div>
    )
}

export default App