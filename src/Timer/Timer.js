import React from 'react';
import './Calculator.css';

class Timer extends React.Component{
    // componentDidMount(){
    //     setInterval(()=>this.updateTimer(), 1000)
    // }
    // updateTimer(){
    //     this.setState({date: new Date()});
    // }
    // render() {
    //     return (
    //         <div>
    //             <h1>HELLO WORLD</h1>
    //             <h1>{new Date().toLocaleTimeString()}</h1>
    //         </div>
    //     )
    // }
    
    // state={
    //     date : new Date()
    // }
    // componentDidMount(){
    //     setInterval(()=>this.updateTimer(), 1000)
    // }
    // updateTimer(){
    //     this.setState({
    //         date : new Date()
    //     })
    // }
    // render() {
    //     return (
    //         <div>
    //             <h1>HELLO WORLD</h1>
    //             <h1>{this.state.date.toLocaleTimeString()}</h1>
    //         </div>
    //     )
    // }

    constructor(props){
        super(props);
        this.state={
            date : new Date()
        }
    }
    componentDidMount(){
        setInterval(()=>this.updateTimer(), 1000)
    }
    updateTimer(){
        this.setState({
            date : new Date()
        })
    }
    render() {
        return (
            <div>
                <h1>HELLO WORLD</h1>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }

}
export default Timer;