import React from 'react'
import FAQCard from './FAQCard'

const FAQ = () => {
    return (
        <div className='py-10 md:py-20 bg-white dark:bg-slate-900'>
            <div className="container px-5 md:px-0">
                <div className="flex justify-between gap-8 flex-col md:flex-row">
                    <div className="md:w-4/12">
                        <h4 className='text-4xl font-bold'>Frequently asked questions</h4>
                        <a href="/" className='text-Royal-Blue font-medium mt-5 inline-block'>Contact us for more info</a>
                    </div>
                    <div className="md:w-8/12">
                        <div className="space-y-2">
                            <FAQCard
                                serial='01'
                                question='How much time does it take?'
                                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                            <FAQCard
                                serial='02'
                                question='What is your class naming convention ?'
                                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                            <FAQCard
                                serial='03'
                                question='How do you communicate?'
                                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                            <FAQCard
                                serial='04'
                                question='I have a bigger project. Can you handle it?'
                                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                            <FAQCard
                                serial='05'
                                question='What is your class naming convention?'
                                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ