import * as React from 'react'
import './Movies.css';

class Movie extends React.Component{
    render() {
        return (
            <div className='movies'>
                <img src={this.props.banner} alt='pic'/>
                <label>{this.props.name} {this.props.rating}</label> 
            </div>
        );
    }
}
export default Movie;