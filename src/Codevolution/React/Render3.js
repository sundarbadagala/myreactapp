import React from 'react'
import Counter from './Render3Props'
import Clicked from './Render3Click'
import Hovered from './Render3Hover'

function Render3() {
    return (
        <div>
            <Counter>
            {
                (count, incrementCount)=>(
                <Clicked count={count} incrementCount={incrementCount}/>)
            }
            </Counter>

            <Counter>
            {
                (count, incrementCount)=>(
                <Hovered count={count} incrementCount={incrementCount}/>)
            }
            </Counter>
        </div>
    )
}

export default Render3
