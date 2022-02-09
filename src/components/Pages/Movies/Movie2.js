import React from 'react';
import './Movie.css';
import Movies from './Movies';
import BahubaliBanner from './bahubali.jpeg';
import SaahoBanner from './saaho.jpg';
import MirchiBanner from './mirchi.jpg';
import RebelBanner from './rebel.jpg';
import ChatrapatiBanner from './chatrapati.png';
import ChakramBanner from './chakram.jpeg';
import EswarlBanner from './eswar.jpg';
import AdaviramuduBanner from './adaviramudu.jpg';


class Movie2 extends React.Component{
    getMovie=(banner, name, rating)=>{
        return <Movies banner={banner} name={name} rating={rating} />
    }
    render(){
        return(
            <div className='movie-section'>
            {this.getMovie(BahubaliBanner, 'BAHUBALI', '8.6')}
            {this.getMovie(SaahoBanner, 'SAAHO', '6.7')}
            {this.getMovie(MirchiBanner,'MIRCHI','7.8')}
            {this.getMovie (RebelBanner,'REBEL','4.5')}
            {this.getMovie (ChatrapatiBanner,'CHATRAPATI','9.6')}
            {this.getMovie (ChakramBanner,'CHAKRAM','6.6')}
            {this.getMovie (EswarlBanner,'ESWAR','8.8')}
            {this.getMovie (AdaviramuduBanner,'ADAVI RAMUDU','3.6')}
            {this.getMovie (BahubaliBanner,'YOGI','4.6')}
            {this.getMovie (BahubaliBanner,'BILLA','7.9')}
            </div>
        );
    }
}

export default  Movie2;