import React, { useEffect, useState } from 'react'
import WorkPortfolio from '../../Components/WorkPortfolio'
import Template from '../../Components/Template'
import { FaMoon, FaSun } from 'react-icons/fa6'



const Work = () => {

  return (
    <>
    
    <div className='dark:bg-Dark-Blue relative'>
    <div className="p-4 flex  absolute right-0">
      </div>
     <WorkPortfolio />
     <Template/>
  
    </div>
    
    </>
   
  )
}

export default Work