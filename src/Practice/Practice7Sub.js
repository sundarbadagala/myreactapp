import React from 'react'

const updatedComp = OriginalComp=>{
    class newComp extends React.Component{
        render() {
            return (
                <div>
                    <OriginalComp name='sundar'/>
                </div>
            )
        }
    }
    return newComp;
}
export default updatedComp;