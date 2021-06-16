import React from 'react'
import SidebarButtons from './SidebarButtons'
import MontosForm from './MontosForm'
import { useRouter } from "next/router";

const Sidebar = ({children}) => {
    const router = useRouter()
    return (
        <div className='flex '>           
            <div className='bg-[#449DEF] space-y-8 mr-5 ml-5 w-36 mt-5 '>

                <SidebarButtons title='Montos Form' onClick={() => router.push("/MontosPage") } />

                <SidebarButtons title='Donacion única' onClick={() => router.push("/DonacionPage") }/>

                <SidebarButtons title='Numeros' onClick={() => router.push("/Numeros") }/>

                <SidebarButtons title='Captadoras' onClick={() => router.push("/CaptadorasPage") }/>

                <SidebarButtons title='Datos Bancarios' onClick={() => router.push("/DatosBancariosPage") }/>

                <SidebarButtons title='Porcentajes' onClick={() => router.push("/PorcentajesPage") }/>

            </div>

            <div className=''>
                {children}
            </div>
        </div>
    )
}

export default Sidebar
