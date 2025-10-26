import React, { useState } from 'react'
import Banner from '../Antara/Banner'
import Lorem from '../Antara/Lorem'


const Readmore = () => {
    const [dark, setDark] = useState(false)
    return (
        <div className={`${dark && "dark"} dark:bg-Tint-Blue dark:text-white`}>

            <label className="inline-flex items-center cursor-pointer  fixed top-[130px] right-[100px]">
                <input type="checkbox" onClick={() => setDark(!dark)} value="" class="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            </label>
            <Banner />
            <Lorem />
        </div>
    )
}

export default Readmore