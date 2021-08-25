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


class Movie3 extends React.Component{
    state={
        Bahubali:{
            name:'BAHUBALI',
            rating: 0,
            banner: BahubaliBanner
        },
        Saaho:{
            name: 'SAAHO',
            raing: 6,
            banner: SaahoBanner
        },
        Mirchi:{
            name: 'MIRCHI',
            raing: 3,
            banner: MirchiBanner
        },
        Rebel:{
            name: 'REBEL',
            raing: 4    ,
            banner: RebelBanner
        },
        Chatrapati:{
            name: 'CHATRAPATI',
            raing: 3,
            banner: ChatrapatiBanner
        },
        Chakram:{
            name: 'CHAKRAM',
            raing: 3,
            banner: ChakramBanner
        },
        Eswar:{
            name: 'ESWAR',
            raing: 3,
            banner: EswarlBanner
        },
        Adaviramudu:{
            name: 'ADAVI RAMUDU',
            raing: 3,
            banner: AdaviramuduBanner
        }

    }
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

export default  Movie3;