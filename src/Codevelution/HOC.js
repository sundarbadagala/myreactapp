import React from 'react'

const updatedComp = (OriginalComp, incrementValue) =>{
    class newComp extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount=()=>{
            this.setState(prevState=>{
                return{
                    count: prevState.count+ incrementValue
                }
            })
        }
        render() {
            console.log(this.props.name)
            return (
                <div>
                    <OriginalComp count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>
                </div>
            )
        }
    }
    return newComp;
}
export default updatedComp; 