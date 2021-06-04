import React from 'react'
import LogoTecho from './LogoTecho'
import { UserIcon } from '@heroicons/react/outline'
import SidebarButtons from './SidebarButtons'

const Navbar = () => {

/*     const handleLogout () => {
            función para desloguearse
    } */



    return (
        <header className='flex justify-between' >
            <LogoTecho styles={'group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'} />
            <div className=' flex items-center m-5'>

                <SidebarButtons title='Header' />
                <SidebarButtons title='Numeros' />
                <SidebarButtons title='Captadoras'/>
                <SidebarButtons title='Form'/>
                <SidebarButtons title='Donacion única'/>
                <SidebarButtons title='Argentina'/>


                <UserIcon
                    className='group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-125 hover:z-50 mr-4'
                    height='60'
                    width='60'
                />

                <h2 className='whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>Nombre del usuario</h2>

                <button /* onClick={handleLogOut} */className='ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5' 
                >
                    Log Out

                </button>
            </div>
        </header>
    )
}

export default Navbar
