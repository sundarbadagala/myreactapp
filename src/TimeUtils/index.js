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
    // const value = '2021/12/23 09:23:34'
    const value = 'Wed Nov 10 2021 13:51:56 GMT+0530 (India Standard Time)'
    // const value = '2021-11-08T05:22:02.000Z'
    // const value = new Date()

    // const timeObj = getTime(value, 'dd-mm-yy')
    const times = getTime(value, 'mm-yy-dd')
    // console.log(timeObj)
    console.log(times)
    // console.log(formattedTimeObj)
    return (
        <div>
            
        </div>
    )
}

export default Index
