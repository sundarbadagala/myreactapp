import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:''
        }
    }
    changeHanlder=(e)=>{
        const {name, value}= e.target
        this.setState({
            [name]:value
        })
    }
    clickHandler=()=>{
        console.log(this.state.id)
    }
    render() {
        return (
            <div>
                check console log<hr/>
                <form>
                    Employee id:<input 
                                    type='text'
                                    name='id'
                                    value={this.state.id}
                                    onChange={this.changeHanlder}/>
                </form>
                <button onClick={this.clickHandler}>Click Here</button>
                
            </div>
        )
    }
}

export default Form
