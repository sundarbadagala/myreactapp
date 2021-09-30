import { getTime } from "./getTime"
import { arrWeekShort, arrMonthFull, arrMonthShort, arrWeekFull } from "./data.names"


export const getFullTime=(value)=>{
        const details = getTime(value, 'dd/mm/yy')
        const keys=[...details.date.split('/'), ...details.time.defaultTime.split(':')]
        const newDate = details.date.split('/').reverse().join(',')
        return{
            date: keys[0],
            weekShort: arrWeekShort[new Date(newDate).getDay()],
            weekFull: arrWeekFull[new Date(newDate).getDay()],
            monthDigit: arrMonthShort.indexOf(keys[1])+1,
            monthShort:arrMonthShort[new Date(newDate).getMonth()],
            monthFull:arrMonthFull[new Date(newDate).getMonth()],
            year: keys[2],
            H: keys[3],
            h: keys[3] > 12 ? keys[3]-12 : keys[3],
            type: keys[3]>12 ? 'PM' : 'AM',
            minutes: keys[4],
            seconds: keys[5]
        }
    }