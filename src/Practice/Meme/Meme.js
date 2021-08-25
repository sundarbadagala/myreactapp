import React, { Component } from 'react';
import Header from './MemeHead';
import Generator from './MemeGen';

export class Meme extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Generator/>
            </div>
        )
    }
}

export default Meme
