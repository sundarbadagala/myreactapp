import React from 'react'

function Main() {
    const arr=[5,5,5,5,5,5,9]
    const result = new Set(arr).size===1
    console.log(result)
    return (
        <div>
            hitting jackpot<br/>
            All the elements in an array should be equal <br/><br/>
            <code>
                Input : [5,5,5,5] <br/>
                outpute: true <br/><br/>
                Input : [6,6,6,6,6,6] <br/>
                outpute: true <br/><br/>
                Input : [3,4,5,5,1,2] <br/>
                outpute: false <br/><br/>
            </code>
        </div>
    )
}

export default Main
