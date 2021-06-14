import React from 'react'

const Button = ({ disabled, content, styles, onClick }) => {
    return (
        <button 
        onClick={onClick} 
        className={styles}
        disabled={disabled}
        >
            {content}
        </button>
    )
}

export default Button
