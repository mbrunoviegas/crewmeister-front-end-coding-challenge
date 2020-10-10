import React from 'react'
import DatePickerAbsenceFilter from '../../atoms/DatePickerAbsenceFilter'
import './styles.css'

const LabelDate = (props) => {
    const { date, setDate, setUserId, label } = props
    return (
        <label className="labelForm">
            {label}
            <DatePickerAbsenceFilter date={date} setDate={setDate} setUserId={setUserId} />
        </label>
    )
}

export default LabelDate