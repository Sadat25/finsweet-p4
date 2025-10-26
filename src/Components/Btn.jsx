import React from 'react'

const Btn = ({ children, className }) => {
    return (
        <button className={`${className} px-6 py-3 lg:px-12 lg:py-4 text-black font-Manrope font-semibold text-base lg:text-lg rounded-[40px] cursor-pointer`}>
            {children}
        </button>
    )
}

export default Btn;