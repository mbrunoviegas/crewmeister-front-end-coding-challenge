import React from 'react'
import './styles.css'

const Button = (props) => {
    const { id, text, handleClick } = props
    return (
        <button className="button" id={id} onClick={handleClick}>
            {text}
        </button>
    )
}
export default Button
