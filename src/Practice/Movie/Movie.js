import React from 'react';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import './Movie.css';

function Movie(){
    const MovieComponent= MovieList.map(movie =>
        <MovieCard movie={movie}/>
        )
    return(
        <div className='movie'>
            {MovieComponent}
        </div>
    );
}
export default Movie;