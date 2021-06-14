import React from 'react'
import SidebarButtons from './SidebarButtons'
import MontosForm from './MontosForm'
import { useRouter } from "next/router";

const Sidebar = () => {
    const router = useRouter()
    return (
        <div className='flex '>           
            <div className='bg-[#449DEF] space-y-8 mr-5 ml-5 w-36 mt-5 '>

                <SidebarButtons title='Montos Form' onClick={() => router.push("/MontosPage") } />

                <SidebarButtons title='Donacion única' onClick={() => router.push("/DonacionPage") }/>

                <SidebarButtons title='Numeros' onClick={() => router.push("/Numeros") }/>

                <SidebarButtons title='Captadoras' onClick={() => router.push("/CaptadorasPage") }/>

                <SidebarButtons title='DatosBancarios' onClick={() => router.push("/DatosBancarios") }/>

                <SidebarButtons title='Porcentajes' onClick={() => router.push("/PorcentajesPage") }/>

            </div>

            <div className=''>
                <MontosForm />
            </div>
        </div>
    )
}

export default Sidebar
