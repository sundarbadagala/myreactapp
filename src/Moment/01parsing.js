import React from 'react'
import moment from 'moment'

function App() {
    const value = moment()
    // console.log('%c moment','color:blue;font-weight:bold',value)
    // console.log('%c toString','color:blue;font-weight:bold',value.toString())
    // console.log('%c toISOString','color:blue;font-weight:bold',value.toISOString())
    console.log(moment('12-23-2021'))
    console.log(moment('2021-12-23'))
    console.log(moment('23-12-2021'))
    console.log(moment('2021-23-12'))
    // console.log(moment(1632936552562))
    return (
        <div>
            Moment
        </div>
    )
}

export default App
