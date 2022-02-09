import React from 'react'
import {withRouter} from 'react-router-dom'

function Router(props) {
    //console.log(window.location)
    //console.log(window.history)
    //console.log(window.match)
    //console.log(localStorage)
    
    const clickHandler=()=>{
        window.open('https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwj4pZCnwNjyAhXXV30KHTxSBbwQPQgJ')
    }
    return (
        <div>
            <button onClick={clickHandler}>Open google</button>
        </div>
    )
}

export default withRouter(Router)
