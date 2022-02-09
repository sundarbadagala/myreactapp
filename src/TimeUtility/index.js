import React from 'react'
// import {getTime} from './getTime'
import {getFullTime} from './getFullTime'

// import {getTime} from './getTimes'
import {getTime} from './getTime'

function Index() {
    // const value = {
    //     date:12,
    //     month:10,
    //     year:2021,
    //     hour:18,
    // }
    // const value = '2021/12/23 19:23:34'
    // const value = 'Wed Nov 10 2021 13:51:56 GMT+0530 (India Standard Time)'
    const value = '2021-11-08T05:22:02.000Z'
    // const value = new Date()

    // const timeObj = getTime(value, 'dd-mm-yy')
    // const times = getTime(value, 'mm-yy-dd')
    // console.log(timeObj)
    // const {date, time} = timeObj
    // console.log(time.defaultTime)
    // console.log(times)
    // console.log(formattedTimeObj)
    console.log(getTime.dateTimeDetails(value, 'yy-dd-mm'))
    // const result = getFullTime(value)
    // console.log(result)
    // const {D, MM, YY}= result
    // console.log(`${D}:${MM}:${YY}`)
    return (
        <div>
            
        </div>
    )
}

export default Index
