import { arrMonthShort } from "./data.names";

export const getTime = (value, format='dd-mm-yy')=>{
    if (typeof value === "string" || typeof value === "number") {
      value = value.toString();
      if (value.length === 13) {
        const date = new Date(parseInt(value));
        format = format
          .replace("dd", date.getDate())
          .replace("mm", arrMonthShort[date.getMonth()])
          .replace("yy", date.getFullYear());
        let defaultTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        let amPm = parseInt(date.getHours()) > 12 ? `${parseInt(date.getHours()) - 12}:${date.getMinutes()}:${date.getSeconds()} pm` : `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} am`;
        return {
          date: format,
          time: { defaultTime: defaultTime, "am/pm": amPm },
        };
      } else if (
        value.includes("/") ||
        value.includes("-") ||
        value.includes(":")
      ) {
        if (value.length === 10 || (value.length <= 19 && value.length >= 14)) {
          value = value
            .replaceAll("-", " ")
            .replaceAll("/", " ")
            .replaceAll(":", " ");
          value = value.split(" ");
          format = format
            .replace("dd", value[1].padStart(2, "0"))
            .replace("mm", arrMonthShort[value[0]-1])
            .replace("yy", value[2]);
          const hours = value[3] ? value[3].padStart(2, "0") : "0";
          const minutes = value[4] ? value[4].padStart(2, "0") : "0";
          const seconds = value[5] ? value[5].padStart(2, "0") : "0";
          let defaultTime = `${hours}:${minutes}:${seconds}`;
          let amPm =
            parseInt(defaultTime) > 12
              ? `${parseInt(hours) - 12}:${minutes}:${seconds} pm`
              : `${hours}:${minutes}:${seconds} am`;
          return {
            date: format,
            time: { defaultTime: defaultTime, "am/pm": amPm },
          };
        }else{
          return 'Invalid Date Format'
        }
      } else if (value.length === 8 || value.length === 14) {
        console.log('inner function')
        console.log(value)
        format = format
          .replace("dd", value.slice(2, 4))
          .replace("mm", arrMonthShort[value.slice(0, 2)-1])
          .replace("yy", value.slice(4, 8));
        const hours = value.slice(8, 10) ? value.slice(8, 10) : "0";
        const minutes = value.slice(10, 12) ? value.slice(10, 12) : "0";
        const seconds = value.slice(12, 14) ? value.slice(12, 14) : "0";
        let defaultTime = `${hours}:${minutes}:${seconds}`;
        let amPm =
          parseInt(defaultTime) > 12
            ? `${parseInt(hours) - 12}:${minutes}:${seconds} pm`
            : `${hours}:${minutes}:${seconds} am`;
        return {
          date: format,
          time: { defaultTime: defaultTime, "am/pm": amPm },
        };
      } else {
        return "Invalid Date Format";
      }
    } else if (typeof value === "object") {
      if (!value === true) {
        return "Invalid date Format";
      } else if (
        Object.keys(value).length === 3 ||
        Object.keys(value).length === 6
      ) {
        format = format
          .replace("dd", value.date)
          .replace("mm", arrMonthShort[value.month-1])
          .replace("yy", value.year);
        const hours = value.hours ? value.hours : "0";
        const minutes = value.minutes ? value.minutes : "0";
        const seconds = value.seconds ? value.seconds : "0";
        let defaultTime = `${hours}:${minutes}:${seconds}`;
        let amPm =
          parseInt(defaultTime) > 12
            ? `${parseInt(hours) - 12}:${minutes}:${seconds} pm`
            : `${hours}:${minutes}:${seconds} am`;
        return {
          date: format,
          time: { defaultTime: defaultTime, "am/pm": amPm },
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
          time: { defaultTime: defaultTime, "am/pm": amPm },
        };
      } else {
        return "Invalid date formate";
      }
    } else {
      return "Invalid Date format";
    }
}
