import { arrMonthShort } from "./data.names";

const millisecondsFormat= /^1?\d{12}$/i
const univFormat= /^\d{4}(\/|-)(0?[0-9]|1[0-2])(\/|-)([0-2]?[0-9]|3[0-1])( ([0-1]?[0-9]|2[0-4]):(0?[0-9]|[1-5][0-9]):(0?[0-9]|[1-5][0-9]))?$/i
const singleValueFormat = /^\d{4}((0[0-9])|(1[0-2]))(([0-2][0-9])|3[0-1])(([0-1][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))?$/i


export const getTime = (value, format='dd-mm-yy')=>{
    if (typeof value === "string" || typeof value === "number") {
      value = value.toString();
      if (millisecondsFormat.test(value)) {
        const date = new Date(parseInt(value));
        format = format
          .replace("dd", date.getDate())
          .replace("mm", arrMonthShort[date.getMonth()])
          .replace("yy", date.getFullYear());
        let defaultTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        let amPm = parseInt(date.getHours()) > 12 ? `${parseInt(date.getHours()) - 12}:${date.getMinutes()}:${date.getSeconds()} pm` : `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} am`;
        return {
          date: format,
          time: { defaultTime: defaultTime, "ampm": amPm },
        };
      } else if (univFormat.test(value)) {
          value = value.split(/\/|:| / )
          format = format
            .replace("yy", value[0].padStart(2, "0"))
            .replace("mm", arrMonthShort[value[1]-1])
            .replace("dd", value[2]);
          const hours = value[3] ? value[3].padStart(2, "0") : "0";
          const minutes = value[4] ? value[4].padStart(2, "0") : "0";
          const seconds = (value[5] && (value[5] ==='00' || value[5] ==='0')) ? '' : value[5].padStart(2, "0");
          let defaultTime = `${hours}:${minutes}${seconds ? ':' : ''}${seconds}`;
          let amPm =
            parseInt(defaultTime) > 12
              ? `${parseInt(hours) - 12}:${minutes}${seconds?':' : ''}${seconds} pm`
              : `${hours}:${minutes}${seconds?':' : ''}${seconds} am`;
          return {
            date: format,
            time: { defaultTime: defaultTime, "ampm": amPm },
          };
        
      } else if (singleValueFormat.test(value)) {
        format = format
          .replace("yy", value.slice(0, 4))
          .replace("mm", arrMonthShort[value.slice(4, 6)-1])
          .replace("dd", value.slice(6, 8));
        const hours = value.slice(8, 10) ? value.slice(8, 10) : "0";
        const minutes = value.slice(10, 12) ? value.slice(10, 12) : "0";
        const seconds = (value.slice(12, 14) && value.slice(12, 14) ==='00') ? '' : value.slice(12, 14)
        let defaultTime = `${hours}:${minutes}:${seconds}`;
        let amPm =
          parseInt(defaultTime) > 12
            ? `${parseInt(hours) - 12}:${minutes}:${seconds} pm`
            : `${hours}:${minutes}:${seconds} am`;
        return {
          date: format,
          time: { defaultTime: defaultTime, "ampm": amPm },
        };
      } else {
        return "Invalid Date Format";
      }
    } else if (typeof value === "object") {
      if (!value === true) {
        return "Invalid Date Format";
      } else if (
        Object.keys(value).length === 3 ||
        Object.keys(value).length === 6
      ) {
        format = format
          .replace("dd", value.date)
          .replace("mm", arrMonthShort[value.month-1])
          .replace("yy", value.year);
        const hours = (value.hours | value.hour)? (value.hours | value.hour) : "0";
        const minutes = (value.minutes|value.minute) ? (value.minutes|value.minute) : "0";
        const seconds = (value.seconds|value.seond) ? (value.seconds|value.seond) : "0";
        let defaultTime = `${hours}:${minutes}:${seconds}`;
        let amPm =
          parseInt(defaultTime) > 12
            ? `${parseInt(hours) - 12}:${minutes}:${seconds} pm`
            : `${hours}:${minutes}:${seconds} am`;
        return {
          date: format,
          time: { defaultTime: defaultTime, "ampm": amPm },
        };
      } else if (value instanceof Date) {
        format = format
          .replace("dd", value.getDate())
          .replace("mm", arrMonthShort[value.getMonth()])
          .replace("yy", value.getFullYear());
        let defaultTime = `${value.getHours()}:${value.getMinutes()}:${value.getSeconds()}`;
        let amPm =
          parseInt(defaultTime) > 12
            ? `${
                parseInt(value.getHours) - 12
              }:${value.getMinutes()}:${value.getSeconds()} pm`
            : `${value.getHours()}:${value.getMinutes()}:${value.getSeconds()} am`;
        return {
          date: format,
          time: { defaultTime: defaultTime, "ampm": amPm },
        };
      } else {
        return "Invalid Date Format";
      }
    } else {
      return "Invalid Date Format";
    }
}
