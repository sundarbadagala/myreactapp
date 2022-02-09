import React from 'react'

class CharCount extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            Chars:'',
            count:0
        }
    }
    storeValue=(event)=>{
        const {name, value}= event.target
        this.setState({
            [name]:value
        })
    }
    countChars=()=>{
        return this.state.Chars.length
    }
    render() {
        return (
            <div>
                <textarea name='Chars' onChange={this.storeValue} placeholder='Enter Some Content Here'></textarea><br/>
                No of chars entered : {this.countChars()}
            </div>
        )
    }
}

export default CharCount
