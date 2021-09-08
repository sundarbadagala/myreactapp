import React, { Component } from 'react'

class Storage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             list:[],
        }
    }
    changeHandler=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        this.setState({
            list: [...this.state.list, {id:Date.now(), task:this.state.name}],
            name:''
        })

    }
    componentDidUpdate(){
        localStorage.setItem('task', JSON.stringify(this.state.list))
    }
    componentDidMount(){
        const dataStore = JSON.parse(localStorage.getItem('task'))
        if(dataStore !== null){
            this.setState({
                list : dataStore
            })
        }
    }
    deleteItem=(id)=>{
        this.setState({
            list: this.state.list.filter(item => item.id !== id)
        })
    }
    clickHandler=()=>{
        this.setState({
            list:[]
        })
    }
    render() {
        console.log(this.state.list)
        return (
            <div>
                <form onSubmit={(e)=>this.submitHandler(e)}>
                    <input type='text' value={this.state.name} onChange={(e)=>this.changeHandler(e)}/>
                    <button type='submit'>Add</button>
                </form>
                <ul>
                    {
                        this.state.list.map(item => 
                            <li key={item.id}>
                                {item.task}
                                <button onClick={()=>this.deleteItem(item.id)}>delete</button>
                            </li>)
                    }
                </ul>
                <div>
                    {
                        this.state.list.length>0 && <button onClick={this.clickHandler}>Clear All</button>
                    }
                </div>
            </div>
        )
    }
}

export default Storage