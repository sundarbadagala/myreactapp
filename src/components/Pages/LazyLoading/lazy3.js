import React, { lazy, Suspense } from 'react'

const Home = lazy(()=>import('./Component'))
const About = lazy(()=>import('./Comp2'))

function lazy3() {
    return (
        <div>
            <Suspense fallback={<div>Home is loading...</div>}>
                <Home/>
            </Suspense>
            <Suspense fallback={<div>About is loading...</div>}>
                <About/>
            </Suspense>
        </div>
    )
}

export default lazy3
