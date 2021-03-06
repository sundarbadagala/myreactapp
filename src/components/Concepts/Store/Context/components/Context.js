import React from 'react'
import {storeProducts, detailProducts} from './Data'

const ProductContext= React.createContext()

class ProductProvider extends React.Component{
    constructor(){
        super()
        this.state={
            products: [],
            details: detailProducts,
            cart:[],
            cartSubTotal:0,
            cartTax:0,
            cartTotal:0
        }
    }
    componentDidMount=()=>{
        this.setProducts()
    }
    setProducts=()=>{
        let tempProducts =[];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(()=>{
            return {products: tempProducts}
        })
    }
    getItem=(id)=>{
        const product = this.state.products.find(item => item.id === id)
        return product;
    }
    addToCart=(id)=>{
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))    
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total= price;
        this.setState(()=>{
            return {products: tempProducts, cart:[...this.state.cart, product]}
        },
        ()=>{
            this.addTotal()
            }
        )
    }
    handleDetail=(id)=>{
        const product = this.getItem(id)
        this.setState(()=>{
            return {details : product}
        })
    }
    increment=(id)=>{
        let tempCart= [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id===id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count =  product.count + 1
        product.total =  product.count * product.price
        this.setState(()=>{
            return{
                cart:[...tempCart]
            }
        },
        ()=>{
            this.addTotal()
        })
    }
    decrement=(id)=>{
        let tempCart= [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id===id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count =  product.count -1
        if(product.count === 0){
            this.removeItem(id)
        }else{
            product.total = product.count * product.price
            this.setState(()=>{
                return{
                    cart:[...tempCart]
                }
            },
            ()=>{
                this.addTotal()
            })
        }
    }
    removeItem =(id)=>{
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProducts.indexOf(this.getItem(id))
        const removedItem = tempProducts[index]
        removedItem.inCart= false
        removedItem.count=0
        removedItem.total=0
        this.setState(()=>{
            return{
                cart: [...tempCart],
                products:[...tempProducts]
            }
        },
        ()=>{
            this.addTotal()
        })

    }
    clearCart=()=>{
        this.setState(()=>{
            return{
                cart : []
            }
        },
        ()=>{
            this.setProducts()
            this.addTotal()
        })
    }
    addTotal=()=>{
        let subTotal = 0;
        this.state.cart.map(item => subTotal += item.total)
        const tempTax = subTotal * 0.05
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState(()=>{
            return{
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal :total
            }
        })
    }
    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state, 
                addToCart: this.addToCart,
                handleDetail: this.handleDetail,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer= ProductContext.Consumer;

export {ProductProvider, ProductConsumer};