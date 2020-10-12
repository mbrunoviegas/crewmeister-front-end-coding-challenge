import React from 'react'
import AddToCalendar from 'react-add-to-calendar'
import './styles.css'

const CalendarButton = (props) => {
    const { absence } = props
    const listItem = [
        { outlook: 'Download' },
        { outlookcom: 'Outlook.com' },
        { google: 'Google' }
    ]
    const event = {
        title: `${absence.name}'s Absence`,
        description: `${absence.name} is ${absence.type === 'sickness' ? 'sick' : 'on vacation'}.`,
        location: 'München, Germany',
        startTime: `${absence.startDate}T00:00:00-04:00`,
        endTime: `${absence.endDate}T22:59:00-04:00`
    }

    return (
        <AddToCalendar event={event} listItems={listItem} buttonLabel="Add Absence To Calendar" />
    )
}

export default CalendarButton
