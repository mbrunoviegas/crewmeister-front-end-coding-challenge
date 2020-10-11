import React from 'react'
import CalendarButton from '../../atoms/CalendarButton';
import './styles.css'

const AddAbsenceToCalendar = (props) => {
    const { absence } = props

    return (
        <div id="calendarContainer">
            <div id="calendarItem">
                <div id="calendarStyle">
                    <CalendarButton absence={absence} />
                </div>
            </div>
        </div>
    )
}

export default AddAbsenceToCalendar
