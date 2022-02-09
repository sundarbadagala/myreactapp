import React from 'react'

function Todo8Sub(props) {
    return (
        <div>
        {
            props.itemList.map(item => <div key={item.key}>{item.task} <button onClick={()=>props.deleteItems(item.key)}>x</button></div>)
        }
        </div>
    )
}

export default Todo8Sub
