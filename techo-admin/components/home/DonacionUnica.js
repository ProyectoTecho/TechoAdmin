import React, { useState, useEffect } from 'react'
import Input from './Input'
import Button from '../Button'
import { db } from '../../firebase/client'

const MontosForm = () => {
    const [data, setData] = useState({
        firstButton: "",
        firstLink: "",
        secondButton: "",
        secondLink: "",
        thirdButton: "",
        thirdLink: "",
        fourthButton: "",
        fourthLink: "",
        fifthButton: "",
        fifthLink: "",
        sixthButton: "",
        sixthLink: "",
    })

    const [montosMP, setMontosMP] = useState('')

    const handleChange = (e) => {
        console.log(e.target.name)
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setBotonesMP()
    }, [])

    const setBotonesMP = async () => {
        db
            .collection('donacionesMP')
            .onSnapshot((querySnapshot) => {
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                });
                setMontosMP(docs)
            })
    }

    const editOrCreateDonacion = async () => {
        try {
            if (!montosMP[0].id) {
                await db
                    .collection('donacionesMP')
                    .doc()
                    .set({
                        firstButton: data.firstButton,
                        firstLink: data.firstLink,
                        secondButton: data.secondButton,
                        secondLink: data.secondLink,
                        thirdButton: data.thirdButton,
                        thirdLink: data.thirdLink,
                        fourthButton: data.fourthButton,
                        fourthLink: data.fourthLink,
                        fifthButton: data.fifthButton,
                        fifthLink: data.fifthLink,
                        sixthButton: data.sixthButton,
                        sixthLink: data.sixthLink,
                    })
            }
            else {
                await db
                    .collection('donacionesMP')
                    .doc(montosMP[0].id)
                    .update({
                        firstButton: data.firstButton,
                        firstLink: data.firstLink,
                        secondButton: data.secondButton,
                        secondLink: data.secondLink,
                        thirdButton: data.thirdButton,
                        thirdLink: data.thirdLink,
                        fourthButton: data.fourthButton,
                        fourthLink: data.fourthLink,
                        fifthButton: data.fifthButton,
                        fifthLink: data.fifthLink,
                        sixthButton: data.sixthButton,
                        sixthLink: data.sixthLink,
                    })
            }
        }
        catch (error) {
            console.error(error)
        }
        setData({firstButton: "",
        firstLink: "",
        secondButton: "",
        secondLink: "",
        thirdButton: "",
        thirdLink: "",
        fourthButton: "",
        fourthLink: "",
        fifthButton: "",
        fifthLink: "",
        sixthButton: "",
        sixthLink: "",})
    }

    console.log(data)
    return (

        <div className='align-center m-5 space-y-6'>
            <h1 className='font-bold'>Editar botones de Mercado Pago</h1>

            <div className='flex'>
                <Input type={'number'} name='firstButton' onChange={handleChange} placeholder={'Ingrese nuevo monto'} label={'1er botón'} />
                <Input type={'text'} name='firstLink' onChange={handleChange} placeholder={'Ingrese nuevo link de Mercado Pago'} label={''} />
            </div>

            <div className='flex'>
                <Input type={'number'} name='secondButton' onChange={handleChange} placeholder={'Ingrese nuevo monto'}
                    label={'2do botón'} />
                <Input type={'text'} name='secondLink' onChange={handleChange} placeholder={'Ingrese nuevo link de Mercado Pago'}
                    label={''} />
            </div>

            <div className='flex'>
                <Input type={'number'} name='thirdButton' onChange={handleChange} placeholder={'Ingrese nuevo monto'}
                    label={'3er botón'} />
                <Input type={'text'} name='thirdLink' onChange={handleChange} placeholder={'Ingrese nuevo link de Mercado Pago'}
                    label={''} />
            </div>

            <div className='flex'>
                <Input type={'number'} name='fourthButton' onChange={handleChange} placeholder={'Ingrese nuevo monto'}
                    label={'4to botón'} />
                <Input type={'text'} name='fourthLink' onChange={handleChange} placeholder={'Ingrese nuevo link de Mercado Pago'}
                    label={''} />
            </div>

            <div className='flex'>
                <Input type={'number'} name='fifthButton' onChange={handleChange} placeholder={'Ingrese nuevo monto'}
                    label={'5to botón'} />
                <Input type={'text'} name='fifthLink' onChange={handleChange} placeholder={'Ingrese nuevo link de Mercado Pago'}
                    label={''} />
            </div>

            <div className='flex'>
                <Input type={'number'} name='sixthButton' onChange={handleChange} placeholder={'Ingrese nuevo monto'}
                    label={'6to botón'} />
                <Input type={'text'} name='sixthLink' onChange={handleChange} placeholder={'Ingrese nuevo link de Mercado Pago'}
                    label={''} />
            </div>

            <Button 
            onClick={editOrCreateDonacion} 
            content='Guardar cambios' 
            styles={"ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5 disabled:opacity-50"} 
            disabled={
                data.firstButton === "" ||
                data.firstLink  === "" ||
                data.secondButton === "" ||
                data.secondLink === "" ||
                data.thirdButton  === "" ||
                data.thirdLink  === "" ||
                data.fourthButton === "" ||
                data.fourthLink === "" ||
                data.fifthButton === "" ||
                data.fifthLink === "" ||
                data.sixthButton === "" ||
                data.sixthLink === "" 
                    ? true
                    : 
                    false
            }
            
            />
        </div>
    )
}

export default MontosForm

