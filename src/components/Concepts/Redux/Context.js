import React from 'react'

const ProductContext= React.createContext()

class ProductProvider extends React.Component{
    constructor(props){
        super()
        this.state={
            count:0
        }
    }
    incrementValue=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    decrementValue=()=>{
        this.setState({
            count: this.state.count -1 
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                incrementValue:this.incrementValue,
                decrementValue:this.decrementValue
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer=ProductContext.Consumer

export {ProductProvider, ProductConsumer, ProductContext}