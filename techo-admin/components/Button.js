import React from 'react'

const Button = ({ content, styles }) => {
    return (
        <button className={styles}>{content}</button>
    )
}

export default Button
