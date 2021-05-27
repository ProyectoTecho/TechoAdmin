import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <header className='flex justify-end pr-5'>
{/*             <Image
                src='/techo-footer.png'
                width={200}
                height={100}
            /> */}
            <h2>Nombre del usuario</h2>
            <button className='ml-3'>Log Out</button>
        </header>
    )
}

export default Navbar
