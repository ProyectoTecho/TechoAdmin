import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const Montos = () => {
    const [value, setValue] = useState(0)

    const onChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    return (
        
        <div className='align-center w-36 m-5'>
            <h1 className='font-bold'>Editar Montos</h1>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'Ingrese nuevo monto'} label={'1er Monto'}/>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'Ingrese nuevo monto'}
            label={'2do Monto'}/>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'Ingrese nuevo monto'}
            label={'3er Monto'}/>
            <Input type={'number'} value={value} onChange={onChange} placeholder={'Ingrese nuevo monto'}
            label={'4to Monto'}/>
            <Button content='Guardar cambios' styles={"ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5"}/>
        </div>
    )
}

export default Montos
