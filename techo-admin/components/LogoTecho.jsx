import React from 'react'
import Image from 'next/image'

const LogoTecho = () => {
    return (
        <div>
            <div className='group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50' >
                <Image
                    src='/techo-footer.png'
                    width='auto'
                    height='100'
                />

            </div>
        </div>
    )
}

export default LogoTecho
