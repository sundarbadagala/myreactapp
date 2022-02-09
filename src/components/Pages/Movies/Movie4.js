import React from 'react';
import './Movie.css';
import Movies from './Movies';
import movies from './Movie4sub'


class Movie4 extends React.Component{
    state={...movies}
    getMovie= movie =>{
        return <Movies banner={movie.banner} name={movie.name} rating={movie.rating} />
    }
    render(){
        return(
            <div className='movie-section'>
            {this.getMovie(this.state.Bahubali)}
            {this.getMovie(this.state.Saaho)}
            {this.getMovie(this.state.Mirchi)}
            {this.getMovie (this.state.Rebel)}
            {this.getMovie (this.state.Chatrapati)}
            {this.getMovie (this.state.Chakram)}
            {this.getMovie (this.state.Eswar)}
            {this.getMovie (this.state.Adaviramudu)}
            </div>
        );
    }
}

export default  Movie4;