import React, { useState } from 'react'
import Input from './Input'
import Button from '../Button'

const MontosForm = () => {
    const [data, setValue] = useState({
        firstButton: 0,
        secondButton: 0,
        thirdButton: 0,
        fourthButton: 0,
        fifthButton: 0,
        sixthButton: 0,
    })

    const onChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    return (
        
        <div className='align-center w-36 m-5 space-y-6'>
            <h1 className='font-bold'>Editar Montos</h1>
            
            <Input type={'number'} value={data.firstInput} onChange={onChange} placeholder={'Ingrese nuevo monto'} label={'1er botón'}/>
            <Input type={'number'} value={data.secondInput} onChange={onChange} placeholder={'Ingrese nuevo monto'}
            label={'2do botón'}/>
            <Input type={'number'} value={data.thirdInput} onChange={onChange} placeholder={'Ingrese nuevo monto'}
            label={'3er botón'}/>
            <Input type={'number'} value={data.fourthButton} onChange={onChange} placeholder={'Ingrese nuevo monto'}
            label={'4to botón'}/>
            <Input type={'number'} value={data.sixthButton} onChange={onChange} placeholder={'Ingrese nuevo monto'}
            label={'5to botón'}/>
            <Input type={'number'} value={data.sixthButton} onChange={onChange} placeholder={'Ingrese nuevo monto'}
            label={'6to botón'}/>

            <Button content='Guardar cambios' styles={"ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5"}/>
        </div>
    )
}

export default MontosForm
