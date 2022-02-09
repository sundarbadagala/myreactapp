import React, { Component } from 'react'
import Counter from './Render2Props'
import Clicked from './Render2Click'
import Hovered from './Render2Hover'

export class Render2 extends Component {
    render() {
        return (
            <div>
                render props<hr/>
                <Counter render={(count, incrementCount)=>(
                    <Clicked count={count} incrementCount={incrementCount}/>
                )}/>

                <Counter render={(count, incrementCount)=>(
                    <Hovered count={count} incrementCount={incrementCount} />
                )}/>
            </div>
        )
    }
}

export default Render2
