import React from 'react';
import JokeCard from './ZokeCard';
import JokeList from './ZokeList';

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            jokes: JokeList
        }
    }
    render() {
        const JokeComponent = this.state.jokes.map( item => <JokeCard joke={item} />)
        return (
            <div>
                {JokeComponent}
            </div>
        )
    }
}
export default Main;