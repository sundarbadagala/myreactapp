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
    setUpdate=(text, key)=>{
        const items = this.state.items;
        // eslint-disable-next-line array-callback-return
        items.map(item => {
            if(item.key === key){
                item.text= text;
            }
        })
        this.setState({
            items: items
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
                    this.state.items.map(item => <div key={item.key}><input type='text' id={item.key} value={item.text} onChange={(e)=>this.setUpdate(e.target.value, item.key)}/> <button onClick={()=>this.deleteItems(item.key)}>x</button></div>)
                }
            </div>
        )
    }
}
export default Todo;