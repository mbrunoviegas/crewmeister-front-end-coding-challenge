import React from 'react'
import DatePicker from 'react-datepicker'

const DatePickerAbsenceFilter = (props) => {
    const { date, setDate, setUserId } = props
    return (
        <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={date}
            onChange={(datePicked) => { setDate(datePicked); setUserId("") }}
            
        />
    )
}

export default DatePickerAbsenceFilter