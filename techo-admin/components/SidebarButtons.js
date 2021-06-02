import React from 'react'

const SidebarButtons = ({ title }) => {
    return (
        <div>
            <button className='hover:bg-red-700 whitespace-nowrap text-white font-bold py-2 px-4 p-5'>
                <h2>
                    {title}
                </h2>
            </button>
        </div>
    )
}

export default SidebarButtons
