import React from 'react'
import {getTime} from './getTime'
import {getFullTime} from './getFullTime'

function Index() {
    // const value = {
    //     date:12,
    //     month:10,
    //     year:2021,
    //     hour:18,
    //     minute:43,
    //     seconds:12
    // }
    const value = '2021/12/23 09:23:34'
    // const timeObj = getTime(value, 'dd-mm-yy')
    const times = getFullTime(value)
    // console.log(timeObj)
    console.log(times)
    // console.log(formattedTimeObj)
    return (
        <div>
            {
                // JSON.stringify(timeObj)
            }
            {
                // JSON.stringify(formattedTimeObj)
            }
            {
                // `${times.h}:${times.minutes} ${times.dayType}`
            }
            {
                // timeObj.time.ampm
            }
            {
                times.seconds
            }
        </div>
    )
}

export default Index
