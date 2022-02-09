import React from 'react'

function App() {
    const votes={
        upVotes:13,
        downVotes:56
    }
    const result = votes.upVotes - votes.downVotes
    console.log(result)
    return (
        <div>
            Given up votes and down votes in object, Find total votes based on given data <br/>
            <code>
                Input : upvotes:15  downvotes:12<br/>
                Output: 3<br/><br/>
                Input : upvotes:12  downvotes:15<br/>
                Output: -3<br/><br/>
            </code>
        </div>
    )
}

export default App
