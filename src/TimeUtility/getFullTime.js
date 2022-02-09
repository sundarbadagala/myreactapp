import { getTime } from "./getTime"
import { arrWeekShort, arrMonthFull, arrMonthShort, arrWeekFull } from "./data.names"


export const getFullTime=(value)=>{
        const details = getTime.dateTime(value, 'yy-mm-dd')
        // console.log('details',details)
        const keys=  details !== 'Invalid Date Format' ? details.split(/[\s-:]+/) : []
        // console.log('keys', keys)
        keys[1] = keys[1]-1
        const newDate = new Date(...keys)
        // console.log('newDate', newDate)
        if(keys.length>0){
            return{
                D: newDate.getDate(),
                DD: arrWeekShort[newDate.getDay()],
                DDD: arrWeekFull[newDate.getDay()],
                M: newDate.getMonth(),
                MM:arrMonthShort[newDate.getMonth()],
                MMM:arrMonthFull[newDate.getMonth()],
                Y:newDate.getFullYear().toString().substr(-2),
                YY:newDate.getFullYear(),
                HRS: newDate.getHours(),
                hrs: newDate.getHours() > 12 ? newDate.getHours()-12 : newDate.getHours(),
                type: keys[3]>12 ? 'PM' : 'AM',
                MIN: newDate.getMinutes(),
                SEC: newDate.getSeconds()
            }
        }else{
            return 'Invalid Date Format'
        }
    }

    // shortYear.toString().substr(-2);