import React, { useState } from 'react'
import Input from './Input'

const Montos = () => {
    const [value, setValue] = useState(0)

    const onChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    
    return (
        <div className='flex flex-row'>
            <h1>montos</h1>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'1er Monto'}/>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'2do Monto'}/>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'3er Monto'}/>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'4to Monto'}/>
        </div>
    )
}

export default Montos
