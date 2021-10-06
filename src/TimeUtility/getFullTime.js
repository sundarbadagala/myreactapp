import { getTime } from "./getTime"
import { arrWeekShort, arrMonthFull, arrMonthShort, arrWeekFull } from "./data.names"


export const getFullTime=(value)=>{
        const details = getTime(value, 'dd/mm/yy')
        const valid = details !== 'Invalid Date Format'
        const keys= valid ? [...details.date.split('/'), ...details.time.defaultTime.split(':')] : []
        const newDate = valid ? details.date.split('/').reverse().join(',') : []
        return{
            D: keys[0],
            DD: arrWeekShort[new Date(newDate).getDay()],
            DDD: arrWeekFull[new Date(newDate).getDay()],
            M: arrMonthShort.indexOf(keys[1])+1,
            MM:arrMonthShort[new Date(newDate).getMonth()],
            MMM:arrMonthFull[new Date(newDate).getMonth()],
            Y: keys[2],
            Hrs: keys[3],
            hrs: keys[3] > 12 ? keys[3]-12 : keys[3],
            Type: keys[3]>12 ? 'PM' : 'AM',
            min: keys[4],
            sec: keys[5] ? keys[5] : null
        }
    }