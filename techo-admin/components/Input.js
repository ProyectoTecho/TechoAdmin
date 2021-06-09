import React from 'react'

const Input = ({ label, type, value, onChange, placeholder }) => {
    return (
        <label >
            {label}
            <input className='mt-2 text-black'type={type} value={value} onChange={onChange} placeholder={placeholder} />

        </label>
    )
}

export default Input
