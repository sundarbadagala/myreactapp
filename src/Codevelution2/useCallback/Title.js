import React from 'react'

function Title() {
    console.log('Call back Hook')
    return (
        <div>
            <h3>Call back Hook</h3>
        </div>
    )
}

export default React.memo(Title)
