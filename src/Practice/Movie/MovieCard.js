import React from 'react'
import './MovieCard.css';

function Card(props){
    return(
        <div className='movie-card'>
            <img src={props.movie.banner} alt='movie banner'/>
            <div className='about'><label>{props.movie.name}</label><label>{props.movie.rating}</label></div>
        </div>
    );
}
export default Card;