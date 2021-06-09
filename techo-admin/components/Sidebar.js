import React from 'react'
import SidebarButtons from './SidebarButtons'

import Montos from './Montos'

const Sidebar = () => {
    return (
        <div className='flex '>           
            <div className='flex-col bg-[#449DEF] space-y-8 mr-5 ml-5 w-36 mt-5  '>
                <SidebarButtons title='Header' />
                <SidebarButtons title='Numeros' />
                <SidebarButtons title='Captadoras' />
                <SidebarButtons title='Form' />
                <SidebarButtons title='Donacion única' />
                <SidebarButtons title='Argentina' />
            </div>

            <div >
                <Montos />
            </div>
        </div>
    )
}

export default Sidebar
