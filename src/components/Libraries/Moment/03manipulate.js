import moment from 'moment'
import React from 'react'

export default function App() {
    const m = moment()
    console.log('before manipulation',m.toString())
    m.add('hours', 4).add('minutes', 15)
    console.log('after manipulation',m.toString())
    console.log(m.calendar())
    m.subtract({'hours':4, 'minutes':15})
    console.log('after second manipulation',m.toString())
    m.startOf('year')
    console.log('after second manipulation',m.toString())
    m.endOf('year')
    console.log('after second manipulation',m.toString())
    return (
        <div>
            
        </div>
    )
}


