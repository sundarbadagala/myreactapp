import React from 'react'

class Curr extends React.Component{
    render() {
        return (
            <div>
                {this.props.count.toLocaleString('INR',{style:'currency', currency:'INR'})}
            </div>
        )
    }
}
export default Curr;