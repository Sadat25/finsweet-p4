import React from 'react'
import FeaturesCard from '../FeaturesCard/FeaturesCard'
import { PiUsersThreeFill } from 'react-icons/pi'
import { FaCheckCircle, FaQuestionCircle } from 'react-icons/fa'
import { MdOutlineEditOff } from 'react-icons/md'
import { FaClock } from 'react-icons/fa6'
import { LuSquarePen } from 'react-icons/lu'

const Features = () => {
    return (
        <div className='py-10 md:py-20 bg-gray-100 dark:bg-slate-900'>
            <div className="container px-5 md:px-0">
                <div className="text-center">
                    <p>Features</p>
                    <h2 className='md:text-5xl text-3xl font-bold max-w-xl mx-auto mb-10'>Design that solves problems, one product at a time</h2>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <FeaturesCard
                            icon={<PiUsersThreeFill />}
                            title='Uses Client First'
                            description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                        />
                        <FeaturesCard
                            icon={<FaCheckCircle />}
                            title='Two Free Revision Round'
                            description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                        />
                        <FeaturesCard
                            icon={<MdOutlineEditOff />}
                            title='Template Customization'
                            description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                        />
                        <FeaturesCard
                            icon={<FaQuestionCircle />}
                            title='24/7 Support'
                            description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                        />
                        <FeaturesCard
                            icon={<FaClock />}
                            title='Quick Delivery'
                            description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                        />
                        <FeaturesCard
                            icon={<LuSquarePen />}
                            title='Hands-on approach'
                            description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features