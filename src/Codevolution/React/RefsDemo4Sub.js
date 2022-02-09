import React from 'react'

const RefsDemo4Sub= React.forwardRef((props, ref)=> {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
}
)

export default RefsDemo4Sub
