import React, { useState, useEffect } from 'react'
import Input from './Input'
import Button from '../Button'
import { db } from '../../firebase/client'

const MontosForm = () => {

    const [firstInput, setFirstInput] = useState("")
    const [secondInput, setSecondInput] = useState("")
    const [thirdInput, setThirdInput] = useState("")

    const [montos, setMontos] = useState("")

    useEffect(() => {
        /* cada vez que refresco la página o se actualiza un estado */
        getMontos()
    }, [])

    /* función que crea un monto si no existe, o edita al existente (si existe). 
    Al monto existente lo busca según su id (que viene desde getMontos()) */
    const editOrCreateMonto = async () => {
        try {
            if (!montos[0].id) {
                await db
                .collection('montos')
                .doc()
                .set({
                    firstMonto: firstInput,
                    secondMonto: secondInput,
                    thirdMonto: thirdInput,
                })
            }
            else {
                await db
                .collection('montos')
                .doc(montos[0].id)
                .update({
                    firstMonto: firstInput,
                    secondMonto: secondInput,
                    thirdMonto: thirdInput,
                })
            }
        }
        catch(error) {
            console.error(error)
        }
    }

    const getMontos = async () => {
        db
            .collection('montos')
            .onSnapshot((querySnapshot) => {
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                });
                setMontos(docs)
            })
            setFirstInput ("")
    }

    return (

        <div className='align-center w-36 m-5 space-y-6'>
            <h1 className='font-bold'>Editar Montos</h1>
            <Input 
            name='firstInput' 
            type={'number'} 
            value={firstInput} 
            onChange={(e) => setFirstInput(e.target.value)} 
            placeholder={'Ingrese nuevo monto'} 
            label={'1er Monto'} 

            />
            <Input 
            name='secondInput' 
            type={'number'} 
            value={secondInput} 
            onChange={(e) => setSecondInput(e.target.value)} 
            placeholder={'Ingrese nuevo monto'}
            label={'2do Monto'} />
            <Input name='thirdInput' 
            type={'number'} 
            value={thirdInput} 
            onChange={(e) => setThirdInput(e.target.value)} 
            placeholder={'Ingrese nuevo monto'}
                label={'3er Monto'} 

                />
            <Button onClick={editOrCreateMonto} 
            content='Guardar cambios' 
            styles={"ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5"
            } 
                
            />
        </div>
    )
}

export default MontosForm
