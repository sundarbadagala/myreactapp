import React from 'react'

function App() {
    const arrs = [4,2,5,7]
    const num = 4
    // const Main=(arr, n)=>{
    //     let x=0
    //     for(let i=0; i<n; i++){
    //         x += arr[i]
    //     }
    //     return x
    // }
    // console.log(Main(arr, n))

    const sliceSum = (arr, n) => arr.reduce((a, v, i) => i < n ? a + v : a, 0);
    console.log(sliceSum(arrs, num))
    return (
        <div>
            Summing Slice<br/>
            <code>
                Input : [1,3,2] & 2<br/>
                Output: 4<br/><br/>
                Input : [4,2,5,7] & 4<br/>
                Output: 18<br/><br/>
                Input : [3,6,2] & 0<br/>
                Output: 0<br/><br/>
            </code>
        </div>
    )
}

export default App
