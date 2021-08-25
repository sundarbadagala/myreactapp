import axios from 'axios'
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
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    render() {
        const {userId, title, body}= this.state
        return (
            <div>
            <form onSubmit={this.submitHandler}>
                User Id: <input type='text' name='userId' value={userId} onChange={this.changeHanlder}/> <br/>
                Title: <input type='text' name='title' value={title} onChange={this.changeHanlder}/> <br/>
                Body: <input type='text' name='body' value={body} onChange={this.changeHanlder}/> <br/>
                <button type='submit'>Submit</button>
            </form>
                
            </div>
        )
    }
}

export default HTTPPost
