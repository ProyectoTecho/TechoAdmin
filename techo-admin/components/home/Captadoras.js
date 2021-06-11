import React, { useState, useEffect } from 'react'
import Input from './Input'
import Button from '../Button'
import { db } from '../../firebase/client'

function Captadoras() {
    const [data, setData] = useState({
        firstButton: "",
        firstLink: "",
        secondButton: "",
        secondLink: "",
        thirdButton: "",
        thirdLink: "",
        fourthButton: "",
        fourthLink: "",
       
    })

    const [captadoras, setCaptadoras] = useState('')

    const handleChange = (e) => {
        console.log(e.target.name)
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setStaff()
    }, [])

    const setStaff = async () => {
        db
            .collection('captadoras')
            .onSnapshot((querySnapshot) => {
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                });
                setCaptadoras(docs)
            })
    }

    const editOrCreateCaptadoras = async () => {
        try {
            if (!captadoras[0]) {
                await db
                    .collection('captadoras')
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
                        
                    })
            }
            else {
                await db
                    .collection('captadoras')
                    .doc(captadoras[0].id)
                    .update({
                        firstButton: data.firstButton,
                        firstLink: data.firstLink,
                        secondButton: data.secondButton,
                        secondLink: data.secondLink,
                        thirdButton: data.thirdButton,
                        thirdLink: data.thirdLink,
                        fourthButton: data.fourthButton,
                        fourthLink: data.fourthLink,
                        
                    })
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    console.log(data)
    return (

        <div className='align-center w-36 m-5 space-y-6'>
            <h1 className='font-bold'>Editar Captadoras</h1>
            <p>Las fotos de las captadoras deben tener un tamaño menor a los 100 kb y deber ser en formato .png </p>
            <p>Para modificar el tamaño de las imagenes pueden usar la siguiente pagina: <br /> 
                <a href="https://www.achicarimagenes.com.ar/" target= "blanck" >Achicar tamaño de imagenes</a>
            </p>
                <br />
                <br />

            <Input type={'text'} name='firstButton' onChange={handleChange} placeholder={'Nombre y Apellido'} label={'Captadora 1'} />
            <Input type={'text'} name='firstLink' onChange={handleChange} placeholder={'Ingrese nuevo link de google drive'} label={''} />


            <Input type={'text'} name='secondButton' onChange={handleChange} placeholder={'Nombre y Apellidoo'}
                label={'Captadora 2'} />
            <Input type={'text'} name='secondLink' onChange={handleChange} placeholder={'Ingrese nuevo link de google drive'}
                label={''} />


            <Input type={'text'} name='thirdButton' onChange={handleChange} placeholder={'Nombre y Apellido'}
                label={'Captadora 3'} />
            <Input type={'text'} name='thirdLink' onChange={handleChange} placeholder={'Ingrese nuevo link de google drive'}
                label={''} />

            <Input type={'text'} name='fourthButton' onChange={handleChange} placeholder={'Nombre y Apellido'}
                label={'Captadora 4'} />
            <Input type={'text'} name='fourthLink' onChange={handleChange} placeholder={'Ingrese nuevo link de google drive'}
                label={''} />

            <Button onClick={editOrCreateCaptadoras} content='Guardar cambios' styles={"ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5"} />
        </div>
    )
}


export default Captadoras
