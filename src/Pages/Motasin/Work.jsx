import React, { useEffect, useState } from 'react'
import WorkPortfolio from '../../Components/WorkPortfolio'
import Template from '../../Components/Template'
import { FaMoon, FaSun } from 'react-icons/fa6'



const Work = () => {
  const [show, setShow] = useState(false)

  // Toggle dark mode
  useEffect(() => {
    if (show) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [show])

  return (
    <>
    
    <div className='dark:bg-Dark-Blue relative'>
    <div className="p-4 flex  absolute right-0">
        <button
          onClick={() => setShow(!show)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {show ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>
     <WorkPortfolio />
     <Template/>
  
    </div>
    
    </>
   
  )
}

export default Work