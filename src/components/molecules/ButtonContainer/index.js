import React from 'react'
import Button from '../../atoms/Button'
import './styles.css'

const ButtonContainer = (props) => {
    const { id, text, handleClick, className } = props
    return (
        <div className={className}>
            <Button id={id} text={text} handleClick={handleClick} />
        </div>
    )
}

export default ButtonContainer
