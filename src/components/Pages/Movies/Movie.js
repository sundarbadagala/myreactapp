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


class Movie extends React.Component{
    render(){
        return(
            <div className='movie-section'>
            <Movies banner={BahubaliBanner} name='BAHUBALI' rating='8.6'/>
            <Movies banner={SaahoBanner} name='SAAHO' rating='6.7'/>
            <Movies banner={MirchiBanner} name='MIRCHI' rating='7.8'/>
            <Movies banner={RebelBanner} name='REBEL' rating='4.5'/>
            <Movies banner={ChatrapatiBanner} name='CHATRAPATI' rating='9.6'/>
            <Movies banner={ChakramBanner} name='CHAKRAM' rating='6.6'/>
            <Movies banner={EswarlBanner} name='ESWAR' rating='8.8'/>
            <Movies banner={AdaviramuduBanner} name='ADAVI RAMUDU' rating='3.6'/>
            <Movies banner={BahubaliBanner} name='YOGI' rating='4.6'/>
            <Movies banner={BahubaliBanner} name='BILLA' rating='7.9'/>
            </div>
        );
    }
}

export default  Movie;