import React, { lazy, Suspense } from 'react'

const Comp = lazy(()=> import ('./Component'))

function Lazy() {
    return (
        <div>
            <Suspense fallback={<div>loading....</div>}>
                <Comp/>
                </Suspense>
        </div>
    )
}

export default Lazy
