//convert arguments to array
import React from 'react'

class Rest extends React.Component{
    main=(...a)=>{
        return a.join('.');
    }
    sub=(b, ...c)=>{
        return b+''+c.join('.')
    }
    render() {
        return (
            <div>
                {this.main(1,2,3,4,5)}<br/>
                {this.sub(1,2,3,4,5)}
            </div>
        )
    }
}

export default Rest;