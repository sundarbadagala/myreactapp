import React from 'react';
import Header from './MemeHeader';
import Generator from './MemeGenerator';

class Meme extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <Generator />
            </div>
        )
    }
}
export default Meme;