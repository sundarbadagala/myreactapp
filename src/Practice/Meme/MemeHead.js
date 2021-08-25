import React, { Component } from 'react';
import './Meme.css';

export class MemeHead extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src='http://www.pngall.com/wp-content/uploads/5/Meme-Troll-PNG-File.png' alt=''/>
                    <p>Meme Generator</p>
                </header>
            </div>
        )
    }
}

export default MemeHead
