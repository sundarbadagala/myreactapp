import React from 'react';
import './Movie.css';
import Movies from './Movies';
import movies from './Movie4sub';


class Movie4 extends React.Component{
    state={...movies}
    getMovie= movie =>{
        return <Movies banner={movie.banner} name={movie.name} rating={movie.rating} />
    }
    render(){
        return(
            <div className='movie-section'>
            {Object.keys(this.state).map(x =>{
                return this.getMovie(this.state[x]);
            })}
            </div>
        );
    }
}

export default  Movie4;