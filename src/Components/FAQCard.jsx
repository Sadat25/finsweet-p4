import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

const FAQCard = ({serial,question,answer}) => {
    const [open, setOpen] = useState(false)
  return (
    <>
      <div className='flex gap-8 justify-between'>
                <div className="flex gap-8">
                    <h4 className='text-xl text-Royal-Blue font-medium'>{serial}</h4>
                    <div className="">
                        <h4 className='text-xl font-medium'>{question}</h4>
                        {open && <p className='mt-2'>{answer}</p>}
                    </div>
                </div>
                <div className="">
                    <button onClick={() => setOpen(!open)} className='cursor-pointer'>{open ? <IoMdClose /> : <FaPlus />}</button>
                    <button></button>
                </div>
            </div>
            <hr className='border-gray-300 mt-4' />
        <div/>
    </>
  )
}

export default FAQCard
