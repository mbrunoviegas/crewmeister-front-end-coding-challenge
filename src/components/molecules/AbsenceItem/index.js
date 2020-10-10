import React from 'react'
import './styles.css'

const AbsenceItem = (props) => {
    const { absence } = props;
    console.log(absence);
    return (
        <div id="absenceItem">
            <div id="absenceLabel">
                From {absence.startDate} to {absence.endDate}
            </div>
            <div id="absence">
                {absence.name} is {absence.type === 'sickness' ? 'sick' : 'on vacation'}.
            </div>
            <hr className="solid"></hr>
        </div>
    )
}

export default AbsenceItem