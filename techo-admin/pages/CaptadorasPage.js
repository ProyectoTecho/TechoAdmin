import React from 'react'
import Sidebar from '../components/home/Sidebar'
import Captadoras from '../components/home/Captadoras'
import Navbar from '../components/home/Navbar'

const CaptadorasPage = () => {

    return (
        <div >
            <Navbar />
            <Sidebar>
                <Captadoras />
            </Sidebar>
        </div>
    )
}

export default CaptadorasPage
