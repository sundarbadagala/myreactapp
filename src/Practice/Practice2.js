//Rest operator
import React from 'react'


class Practice extends React.Component{
    add = (...x) => {
        return <div>{x.map(x => x+x)}<br/></div>
    }
    render(){
        return(
            <div>
            {this.add(1,4,5)}
            </div>
        );
    }
}
export default Practice;