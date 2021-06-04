import React from 'react'
import SidebarButtons from './SidebarButtons'

const Sidebar = () => {
    return (
        <nav >
            <div className='bg-blue-500 h-screen'>
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
