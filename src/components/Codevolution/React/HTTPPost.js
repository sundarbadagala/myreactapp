import React, { Component } from 'react'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }
    changeHanlder=(event)=>{
        const {name, value}= event.target
        this.setState({
            [name]:value
        })
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        const {userId, title, body}= this.state
        return (
            <div>
            <form onSubmit={this.submitHandler}>
                <input type='text' name='userId' value={userId} onChange={this.changeHanlder}/> 
                <input type='text' name='title' value={title} onChange={this.changeHanlder}/> 
                <input type='text' name='body' value={body} onChange={this.changeHanlder}/> 
                <button type='submit'>Submit</button>
            </form>
                
            </div>
        )
    }
}

export default HTTPPost
