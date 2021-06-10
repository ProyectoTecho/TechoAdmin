import React from 'react'
import SidebarButtons from './SidebarButtons'
/* import MontosForm from './MontosForm' */
import DonacionUnica from './DonacionUnica'

const Sidebar = () => {


    return (
        <div className='flex '>           
            <div className='bg-[#449DEF] space-y-8 mr-5 ml-5 w-36 mt-5 '>
                <SidebarButtons title='Montos Form' />
                <SidebarButtons title='Donacion única' />
                <SidebarButtons title='Numeros' />
                <SidebarButtons title='Captadoras' />
                <SidebarButtons title='Argentina' />
            </div>

            <div className=''>
                {/* <MontosForm /> */}
                <DonacionUnica />
            </div>
        </div>
    )
}

export default Sidebar