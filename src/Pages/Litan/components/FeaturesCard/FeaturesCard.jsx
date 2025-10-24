import React from 'react'

const FeaturesCard = ({ icon, title, description }) => {
    return (
        <div className='bg-white p-12 space-y-3 text-left duration-300 transition-all ease-in-out hover:scale-105'>
            <div className="text-Royal-Blue text-3xl">
                {icon}
            </div>
            <h4 className='text-2xl font-medium'>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default FeaturesCard