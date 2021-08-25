import React, {useState} from 'react'

function Name() {
    const [Name, setName] = useState({firstName:'sundar', lastName:'rao'})
    return (
        <div>
            object by using useState hook <hr/>
            Full name is  - {Name.firstName} {Name.lastName}
        </div>
    )
}

export default Name
