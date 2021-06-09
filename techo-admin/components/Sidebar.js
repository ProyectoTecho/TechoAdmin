import React from 'react'
import SidebarButtons from './SidebarButtons'
import Navbar from './Navbar'

const Sidebar = () => {
    return (
        <nav >
            <Navbar/>
            <div className='bg-[#449DEF] space-y-8 mr-5 ml-5 h-screen w-36 mt-5  '>
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
