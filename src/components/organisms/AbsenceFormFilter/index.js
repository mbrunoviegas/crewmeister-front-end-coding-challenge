import React from 'react';
import LabelDate from '../../molecules/LabelDate/index'
import LabelInput from '../../molecules/LabelInput/index';
import ButtonContainer from '../../molecules/ButtonContainer'
import './styles.css';

const AbsenceFormFilter = (props) => {
    const { userId, setUserId, startDate, setStartDate,
        endDate, setEndDate, handleSubmit, handleChange } = props;

    return (
        <form id="form" onSubmit={handleSubmit}>
            <LabelInput userId={userId} handleChange={handleChange} label={'User ID:'} />
            <LabelDate date={startDate} setDate={setStartDate} setUserId={setUserId} label={'Start Date:'} />
            <LabelDate date={endDate} setDate={setEndDate} setUserId={setUserId} label={'End Date:'} />
            <ButtonContainer id={'buttonListAbsences'} text={'List Absences'} className={'buttonContainer'} />
        </form>
    )
}

export default AbsenceFormFilter