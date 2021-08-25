import React from 'react'

class MovieCard extends React.Component{
    render() {
        return (
            <div>
                Name: {this.props.name}<br/>
                Rating: {this.props.rating}
                <hr/> 
            </div>
        )
    }
}
export default MovieCard;