import React, { useState } from 'react';
import fileDownload from 'js-file-download';
import AbsenceService from '../../../services/modules/Absences'

import './styles.css'
import "react-datepicker/dist/react-datepicker.css";
import AbsenceContainer from '../../templates/AbsenceContainer';
import ButtonContainer from '../../molecules/ButtonContainer/index'

export default function Absences() {
    const absenceService = new AbsenceService()

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [userId, setUserId] = useState("");
    const [absences, setAbsences] = useState([]);

    const handleClick = (e) => {
        absenceService.getICalendarAbsences().then((file) => {
            fileDownload(file, "AbsencesCalendar.ics")
        });

    }

    const handleSubmit = (e) => {
        let userIdValue = startDate && endDate ? "" : userId

        if (!userIdValue) {
            setUserId(userIdValue);
        }

        absenceService.getAbsences(userIdValue, startDate, endDate).then((data) => {
            setAbsences(data);
        })

        e.preventDefault();
    };

    const handleChange = (e) => {
        setUserId(e.target.value)
        setStartDate("");
        setEndDate("");
    };

    return (
        <div className="absencePage">,
            <div id="appName">
                <span id="spanName">
                    Absence Manager
                </span>
            </div>

            <AbsenceContainer absences={absences} userId={userId} setUserId={setUserId}
                startDate={startDate} setStartDate={setStartDate}
                endDate={endDate} setEndDate={setEndDate}
                handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick} />

            <ButtonContainer id={'buttonDownload'} text={'Download Full Absences Calendar'}
                handleClick={handleClick} className={'buttonContainer'} />
        </div>
    );
}