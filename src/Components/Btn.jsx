import React from 'react'

const Btn = ({ children, className }) => {
    return (
        <button className={`lg:px-17 px-7 lg:py-4 py-3 text-white bg-Dark-Blue hover:bg-[#FCD980] hover:text-black font-Manrope font-semibold lg:text-[18px] text-sm leading-8 rounded-4xl duration-500 ease-in-out cursor-pointer ${className}`}>
            {children}
        </button>
    )
}

export default Btn