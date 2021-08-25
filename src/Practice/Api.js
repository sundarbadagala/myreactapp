import axios from 'axios'
import React, { Component } from 'react'

class Api extends Component {
    constructor(props){
        super()
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }
    changeHangler=(e)=>{
        const {name, value}= e.target
        this.setState({
            [name]: value
        })

    }
    submitHangler=(e)=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))

    }
    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHangler}>
                    <input type='text' name='userId' value={userId} onChange={this.changeHangler} placeholder='userId'/><br/>
                    <input type='text' name='title' value={title} onChange={this.changeHangler} placeholder='title'/><br/>
                    <input type='text' name='body' value={body} onChange={this.changeHangler} placeholder='body'/><br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Api
