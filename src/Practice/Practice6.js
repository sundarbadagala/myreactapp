import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            firstName: '',
            lastName:'',
            textArea: '',
            isSingle:false,
            gander:'',
            favColor:''
        }
        this.storeValue= this.storeValue.bind(this)
    }
    storeValue(event){
        const {name, value, type, checked}= event.target
        type==='checkbox'?this.setState({[name]: checked}):this.setState({[name]: value})

    }
    render() {
        return (
            <div>
                <form>
                    <input type='text' onChange={this.storeValue} name='firstName' placeholder='First Name'/>
                    <input type='text' onChange={this.storeValue} name='lastName' placeholder='Last Name'/><br/>
                    <textarea onChange={this.storeValue} name='textArea' placeholder='Some description here'/><br/>
                    <input type='checkbox' onChange={this.storeValue} name='isSingle' checked={this.state.isSingle}/>Are you single<br/>
                    <input type='radio' onChange={this.storeValue} name='gender' value='male' checked={this.state.gender === 'male'} />Male
                    <input type='radio' onChange={this.storeValue} name='gender' value='female' checked={this.state.gender === 'female'} />Female<br/>
                    <select value='color' onChange={this.storeValue} name='favColor'>
                        <option value='blue'>Blue</option>
                        <option value='red'>Red</option>
                        <option value='green'>Green</option>
                        <option value='yellow'>Yellow</option>
                    </select>
                </form>
                <hr/>
                Name: {this.state.firstName} {this.state.lastName} <br/>
                About You: {this.state.textArea}<br/>
                Gender: {this.state.gender}<br/>
                Favourite Colour: {this.state.favColor}<br/>
            </div>
        )
    }
}
export default App;