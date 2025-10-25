import React from 'react'

const Btn = ({ children, className }) => {
    return (
        <button className={`px-4 py-3 lg:px-17 lg:py-4 text-black font-Manrope font-semibold text-sm lg:text-[18px] rounded-2xl cursor-pointer ${className}`}>
            {children}
        </button>
    )
}

export default Btn