import React from 'react'

const Input = ({ label, type, value, onChange, placeholder }) => {
    return (
        <label >
            {label}
            <input className='mr-5 ml-5' type={type} value={value} onChange={onChange} placeholder={placeholder} />

        </label>
    )
}

export default Input
