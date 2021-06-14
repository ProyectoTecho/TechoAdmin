import React from 'react'
import Sidebar from '../components/home/Sidebar'
import MontosForm from '../components/home/MontosForm'
import Navbar from '../components/home/Navbar'

const MontosPage = () => {

    return (
        <div >
            <Navbar />
            <Sidebar>
                <MontosForm />
            </Sidebar>
        </div>
    )
}

export default MontosPage
