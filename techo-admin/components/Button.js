import React from 'react'

const Button = ({ content, styles, onClick }) => {
    return (
        <button onClick={onClick} className={styles}>{content}</button>
    )
}

export default Button
