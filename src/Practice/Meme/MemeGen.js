import React, { Component } from 'react'

export class MemeGen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             topText: '',
             bottomText: '',
             randomImg:'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response =>{
                const {memes}= response.data
                this.setState({allMemeImgs : memes})
            })
    }
    handlerChange(event){
        const {name, value}= event.target
        this.setState({
            [name]: value
        })
    }
    handlerSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({
            randomImg: randMemeImg
        })
    }
    
    render() {
        return (
            <div>
                <form className='meme-form' onSubmit={this.handlerSubmit}>
                    <input type='text' 
                           name='topText' 
                           value={this.state.topText} 
                           placeholder='Top Text'
                           onChange={this.handlerChange} />
                    <input type='text' 
                           name='bottomText' 
                           value={this.state.bottomText} 
                           placeholder='Top Text'
                           onChange={this.handlerChange}/>
                    <button>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} alt=''/>
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGen