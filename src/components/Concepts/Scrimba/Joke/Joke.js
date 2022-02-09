import React from 'react';
import Joke from './JokeSub';

function JokeList(){
    return(
        <div>
        <h4 style={{textAlign:'center'}}>Displaying jokes by props method</h4>
        <hr/>
        <Joke 
            question='aak paak'
            punchline='kare paaak'/>
        <Joke 
            question='aasa dosa'
            punchline='appadam vada'/>

        <label style={{color:'red'}}>here hiding question when not entered</label>
        <Joke 
            punchline='arrey entra idi'/>
        
        <label  style={{color:'red'}}>here hiding punchline when not entered</label>
        <Joke 
            question='sare sarle ennenno anukuntam'/>
        </div>
    );
}
export default JokeList;

