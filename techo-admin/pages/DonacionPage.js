import React from 'react'
import Sidebar from '../components/home/Sidebar'
import DonacionUnica from '../components/home/DonacionUnica'
import Navbar from '../components/home/Navbar'

const DonacionUnicaPage = () => {

    return (
        <div >     
            <Navbar />    
            <Sidebar>
                <DonacionUnica/>
            </Sidebar>
        </div>
    )
}

export default DonacionUnicaPage
