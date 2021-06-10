import React from 'react'
import SidebarButtons from './SidebarButtons'
import MontosForm from './MontosForm'
import Porcentajes from './porcentajes/Porcentajes'


const Sidebar = () => {


    return (
        <div className='flex '>           
            <div className='bg-[#449DEF] space-y-8 mr-5 ml-5 w-36 mt-5 '>
                <SidebarButtons title='Montos Form' />
                <SidebarButtons title='Donacion única' />
                <SidebarButtons title='Numeros' />
                <SidebarButtons title='Captadoras' />
                <SidebarButtons title='Argentina' />
                <SidebarButtons title='Porcentajes' />
            </div>

            <div className=''>
                <MontosForm />
                <Porcentajes />
            </div>
        </div>
    )
}

export default Sidebar
