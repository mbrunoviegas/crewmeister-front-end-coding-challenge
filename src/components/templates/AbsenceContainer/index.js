import React from 'react'
import AbsenceFormFilter from '../../organisms/AbsenceFormFilter/index'
import AbsencesList from '../../organisms/AbsencesList/index'

import './styles.css'

const AbsenceContainer = (props) => {
    const { absences, userId, setUserId,
        startDate, setStartDate,
        endDate, setEndDate,
        handleChange, handleSubmit, handleClick } = props

    return (
        <div className='absenceContainer'>
            <AbsencesList absences={absences} />

            <AbsenceFormFilter userId={userId} setUserId={setUserId}
                startDate={startDate} setStartDate={setStartDate}
                endDate={endDate} setEndDate={setEndDate}
                handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick} />


        </div>
    )
}

export default AbsenceContainer
