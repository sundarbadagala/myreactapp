// convert array to arguments
import React from 'react'

let arr=[1,2,3];
function add(a,b,c){
            return a*b*c;
        }
class Spread extends React.Component{        
    render() {
        return (
            <div>
                {add(...arr)}
            </div>
        )
    }
}

export default Spread;