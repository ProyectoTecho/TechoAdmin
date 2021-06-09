import React from 'react'

const Input = ({ label, type, value, onChange, placeholder }) => {
    return (
        <label className={styles.label}>
            {label}
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} />

        </label>
    )
}

export default Input
