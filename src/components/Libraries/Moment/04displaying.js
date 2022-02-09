import moment from 'moment'
import React from 'react'

function App() {
    const m = moment()
    console.log(m.format('dddd MMM Mo YYYY'))
    console.log(m.format('LTS'))        //check official page for more options
    console.log(m.format('[Oh My God, Today is dddd ] dddd'))
    m.locale('en-in')
    console.log(m.format('L'))
    console.log(moment('2021-09-20').fromNow())
    console.log(moment('2021-09-30').from('2021-09-30'))
    
    const a = moment('2021-09-20')
    const b = moment('2021-09-30')
    console.log(b.diff(a))
    console.log(b.diff(a,'days'),'days difference')
    console.log(b.diff(a,'weeks', true,'difference in weeks'))
    console.log('value of in seconds',a.valueOf())
    console.log('days in month',m.daysInMonth())

    const jsonObj= {
        momentObj: a
    }
    console.log(JSON.stringify(jsonObj))
    return (
        <div>
            
        </div>
    )
}

export default App
