import React from 'react'

function CompMemo({name}) {
    console.log('Memo Component')
    return (
        <div>
            Memo Component {name}
        </div>
    )
}

export default React.memo(CompMemo)
