import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Dates() {
    const [selectDate, setSelectDate]= useState('')
    console.log(selectDate)
    return (
        <div>
            <DatePicker
                selected={selectDate}
                onChange={date=>setSelectDate(date)}
                dateFormat='yyyy/MM/dd'
                // minDate={new Date()}
                filterDate={date=> date.getDay() !== 6 && date.getDay() !== 0}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
            />
        </div>
    )
}

export default Dates
