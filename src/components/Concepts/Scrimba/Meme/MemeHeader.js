import React from 'react';
import './Meme.css';

class Header extends React.Component{
    render() {
        return (
            <div>
                <header>
                    <img src='http://www.pngall.com/wp-content/uploads/5/Meme-Troll-PNG-File.png' alt='meme'/>
                    <p>Meme Generator</p>
                </header>
            </div>
        )
    }
}
export default Header;