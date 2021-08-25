import React from 'react'

class Card extends React.Component{
    render() {
        return (
            <div>
                <p style={{display:this.props.joke.question ? 'block': 'none', color:'red'}}>Question: {this.props.joke.question}</p>
                <p style={{display:this.props.joke.punchline ? 'block': 'none', color:'blue'}}>Punch Line: {this.props.joke.punchline}</p>
                <hr/>
            </div>
        )
    }
}
export default Card;