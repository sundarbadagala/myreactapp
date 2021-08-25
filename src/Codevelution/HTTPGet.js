import React, { Component } from 'react'
import axios from 'axios'

export class HTTPGet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             getData:[],
             errorMsg:''
        }
    }
    componentDidMount=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.setState({
            getData: response.data
        }))
        .catch(error => this.setState({
            errorMsg:'Data ledura jaffa'
        }))
    }
    showData=()=>{
        const showDetails= this.state.getData.length ? this.state.getData.map((item, index) => <Card item={item} key={index}/>) : <h1 style={{color:'red', textAlign:'center'}}>{this.state.errorMsg}......</h1>
        return showDetails;
    } 
    render() {
        
        return (
            <div>
                <h2 style={{textAlign:'center'}}>List of Post</h2>
                {this.showData()}
            </div>
        )
    }
}

class Card extends React.Component{
    render() {
        return (
            <div>
                <label style={{color:'red'}}>Title:</label> {this.props.item.title} <br/>
                <label style={{color:'red'}}>Body:</label> {this.props.item.body}<hr/>
            </div>
        )
    }
}

export default HTTPGet
