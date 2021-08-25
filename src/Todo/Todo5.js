import React from 'react'

class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[],
            currentItems:{
                text:'',
                key:''
            }
        }
    }
    handleInput=(e)=>{
        this.setState({
            currentItems:{
                text: e.target.value,
                key:Date.now()
            }
        })
    }
    addItem=(e)=>{
        e.preventDefault();
        const newItem= this.state.currentItems
        if(newItem.text !== ''){
            const newItems= [...this.state.items, newItem]
            this.setState({
                items: newItems,
                currentItems:{
                    text:'',
                    key:''
                }
            })
        }
    }
    deleteItems=(key)=>{
        this.setState({
            items: this.state.items.filter(item => item.key !== key)
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input type='text' value={this.state.currentItems.text} onChange={this.handleInput}/>
                    <button type='submit'>Add</button>
                </form>
                {
                    this.state.items.map(item => <div key={item.key}>{item.text} <button onClick={()=>this.deleteItems(item.key)}>x</button></div>)
                }
            </div>
        )
    }
}
export default Todo;