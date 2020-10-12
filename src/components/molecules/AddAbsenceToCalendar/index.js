import React from 'react'
import CalendarButton from '../../atoms/CalendarButton';
import './styles.css'

const AddAbsenceToCalendar = (props) => {
    const { absence } = props

    return (
        <div id="calendarContainer">
            <div id="calendarWrapper">
                <div id="calendarButton">
                    <CalendarButton absence={absence} />
                </div>
            </div>
        </div>
    )
}

export default AddAbsenceToCalendar
