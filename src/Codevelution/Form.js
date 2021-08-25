import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             comments:'',
             topic:''
        }
    }
    changeUserNameHandler=(event)=>{
        this.setState({
            userName: event.target.value
        })
    }
    changeCommentHandler=(event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    changeTopicHandler=(event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    submitHanler=(event)=>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHanler}>
                    <div>
                        <label>Username</label>
                        <input type='text' value={this.state.userName} onChange={this.changeUserNameHandler}/>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.changeCommentHandler}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.changeTopicHandler}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='Vue'>Vue</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
