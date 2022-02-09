import React, { lazy, Suspense } from 'react'

const MyApp= lazy(()=>import('./Component'))

function Lazy() {
    return (
        <div>
        <h1>This file shoudn't be loading</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <MyApp/>
        </Suspense>
        </div> 
    )
}

export default Lazy
