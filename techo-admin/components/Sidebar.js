import React from 'react'
import SidebarButtons from './SidebarButtons'

const Sidebar = () => {
    return (
        <nav >
            <div className='bg-[#449DEF] h-screen w-36 mt-5  '>
                <SidebarButtons title='Header' />
                <SidebarButtons title='Numeros' />
                <SidebarButtons title='Captadoras'/>
                <SidebarButtons title='Form'/>
                <SidebarButtons title='Donacion única'/>
                <SidebarButtons title='Argentina'/>
            </div>

        </nav>
    )
}

export default Sidebar
