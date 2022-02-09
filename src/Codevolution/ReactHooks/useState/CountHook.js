import React, {useState} from 'react'

function Count(){
    const [count, incrementCount] = useState(0)
    return(
        <div>
            <button onClick={()=>incrementCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}

export default Count