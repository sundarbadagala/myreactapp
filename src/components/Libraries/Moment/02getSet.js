import React from 'react'
import moment from 'moment'

function App() {
    const m = moment()
    console.log(m.toString())
    //--------------------Getting units----------------------------
    console.log(m.minutes())
    console.log(m.hours())
    console.log(m.week())
    console.log(m.quarter())
    //--------------------Setting units----------------------------
    m.minutes(0)
    m.hours(0)
    m.week(2)
    m.set('day', 0)
    console.log(m.toString())
    //--------------------Min Max units----------------------------
    const n = moment('2021-12-12')
    const l = moment()
    console.log(moment.min(n, l).toString())
    console.log(moment.max(n, l).toString())

    return (
        <div>
            
        </div>
    )
}

export default App
