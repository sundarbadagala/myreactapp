import React from 'react'

class Events extends React.Component{
    showResult=()=>{
        const x= document.getElementById('demo').value;
        document.getElementById('name').innerHTML='hello '+ x +'!, How are you?';
    }
    render() {
        return (
            <div>
                <input type='text' id='demo' placeholder='Enter Name'/>
                <input type='button' value='Enter' onClick={this.showResult}/>
                <br/><span id='name'></span>
            </div>
        )
    }
}

export default Events;