import React from 'react';
import MovieCard from './MovieCard';
import MovieData from './MovieData';

class Movie extends React.Component{
    MovieComponent= MovieData.map(movie =>
        <MovieCard name={movie.name} rating={movie.rating} />
        )
    render() {
        return (
            <div>
                {this.MovieComponent}
            </div>
        )
    }
}

export default Movie;