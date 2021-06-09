import React, { useState } from 'react'
import Input from './Input'

const Montos = () => {
    const [value, setValue] = useState(0)

    const onChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    return (
        
        <div className='flex flex-col h-screen'>
            <h1>Editar Montos</h1>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'Ingrese nuevo monto'} label={'1er Monto'}/>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'Ingrese nuevo monto'}
            label={'2do Monto'}/>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'Ingrese nuevo monto'}
            label={'3er Monto'}/>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'Ingrese nuevo monto'}
            label={'4to Monto'}/>
        </div>
    )
}

export default Montos
