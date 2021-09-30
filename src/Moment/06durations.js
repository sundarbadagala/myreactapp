import moment from 'moment'
import React from 'react'

function App() {
    let m = moment.duration(5000) //5000 milli seconds also write as moment.duration(5, 'seconds')
    console.log(m.humanize())
    m = moment.duration(5, 'hours')
    console.log(m.humanize())
    console.log(moment.duration(5, 'weeks').days())     //31+4 --> 4 days
    console.log(moment.duration(5, 'weeks').asDays())
    console.log(moment.duration(1, 'day').add('1', 'week').humanize())


    return (
        <div>
            
        </div>
    )
}

export default App
