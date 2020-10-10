import React from 'react'
import './styles.css'

const LabelInput = (props) => {
    const { userId, handleChange, label } = props
    return (
        <label className="labelForm">
            {label}
            <input value={userId} onChange={handleChange}
                name="numberOfGuests"
                type="number"
            />
        </label>
    )
}

export default LabelInput
