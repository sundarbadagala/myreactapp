import React from 'react'
const {produce} = 'immer'

class App extends React.Component {
  state = {
    red: 'red', 
    yellow: 'black', 
    green: 'black',
    next: "yellow"
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeHandle(), 3000);
  }
  
  componentWillUnmount()  {
    clearInterval(this.interval);
  }

  handleRedLight = () => {
    this.setState(
      produce(draft => {
        draft.red = 'red';
        draft.yellow = 'black';
        draft.green = 'black';
        draft.next = 'yellow'
      })
    )
  }
  
  handleYellowLight = () => {
    this.setState(
      produce(draft => {
        draft.red = 'black';
        draft.yellow = 'yellow';
        draft.green = 'black';
        draft.next = 'green'
      })
    )
  }
  
  handleGreenLight = () => {
    this.setState(
      produce(draft => {
        draft.red = 'black';
        draft.yellow = 'black';
        draft.green = 'green';
        draft.next = 'red'
      })
    )
  }

  changeHandle = () => {
    if (this.state.next === 'yellow') {
      this.handleYellowLight()
    } else if (this.state.next === 'green') {
      this.handleGreenLight()
    } else {
      this.handleRedLight()
    }
    
  }

  render() {
    return (
      <div className="box">
        <div className="circle" style={{backgroundColor: this.state.red}}></div>
        <div className="circle" style={{backgroundColor: this.state.yellow}}></div>
        <div className="circle" style={{backgroundColor: this.state.green}}></div>
      </div>
  );
}
};

export default App