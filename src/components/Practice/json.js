import React from 'react'

const obj = {
    first:{
        name:'vijay',
        age:20,
        bike:'duke'
    },
    second:{
        name:'kumar',
        age:30,
        bike:'raider'
    }
}
const str  ={"first":{"name":"vijay","age":20,"bike":"duke"},"second":{"name":"kumar","age":30,"bike":"raider"}}
function Json() {
    console.log(JSON.stringify(obj))
    console.log(str)
    return (
        <div>
            
        </div>
    )
}

export default Json
