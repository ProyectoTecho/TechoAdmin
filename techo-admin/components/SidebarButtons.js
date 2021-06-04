import React from 'react'

const SidebarButtons = ({ title }) => {

   /*  const handleClick = () => {
        botón para renderizar cada vista del admin
    }
 */
    return (
        <>
            <button /* onClick={handleClick} */ className='hover:bg-red-700 mr-4 whitespace-nowrap text-white font-bold py-2 px-4 p-5'>
                <h2>
                    {title}
                </h2>
            </button>
        </>
    )
}

export default SidebarButtons
