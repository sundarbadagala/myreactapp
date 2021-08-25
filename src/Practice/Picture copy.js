import React from 'react'

class Main extends React.Component{
    constructor(){
        super()
        this.state={
            value: false
        }
    }
    render(){
        return(
            <React.Fragment>
                {this.state.value ? 'hello world':'bye world'}
            </React.Fragment>
        )
    }
}
export default Main;