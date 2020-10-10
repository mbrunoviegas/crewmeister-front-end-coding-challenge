import React from 'react'
import AbsenceItem from '../../molecules/AbsenceItem/index';
import './styles.css'

const AbsencesList = (props) => {
    const { absences } = props
    return (
        <div id="listAllAbsences">
            {absences.map((absence, index) => {
                return (
                    <AbsenceItem key={index} absence={absence} />
                )
            })}
        </div>
    )
}

export default AbsencesList
