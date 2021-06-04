import React from 'react'
import Image from 'next/image'

const LogoTecho = ({ styles }) => {
    return (
        <div>
            <div className={styles} >
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
