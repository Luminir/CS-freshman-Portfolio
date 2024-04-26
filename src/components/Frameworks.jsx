import React from 'react'
import BS from '../assets/bootstrap.png'
import ExpressJS from '../assets/expressJS.png'
import REACT from '../assets/react.png'
import NodeJS from '../assets/nodejs.png'
import Tailwind from '../assets/tailwind.png'
import Flask from '../assets/flask.png'

const Frameworks = () => {
  return (
    <div className='w-full py-[5rem] px-4 bg-[#3aaccf]' id='frameworks'>
        <div className='max-w-[1240px] mx-auto flex my-5 text-white'><h2 className='md:text-4xl sm:text-3xl text-2xl font-bold'>My Frameworks</h2></div>
        <div className='max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            
            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-down" data-aos-delay="500">
                <img className='w-20 mx-auto mt-3 ' src={BS} alt="Bootstrap Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>Boostrap 5.0</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals & Advances</p>
                    <p className=' py-2 border-b mx-8 mb-2'>8/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-4/5 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-down" data-aos-delay="500">
                <img className='w-20 mx-auto mt-3 ' src={ExpressJS} alt="EX Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>Express JS</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals learned from F8</p>
                    <p className=' py-2 border-b mx-8 mb-2'>5/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-3/6 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

        
            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-down" data-aos-delay="500">
                <img className='w-20 mx-auto mt-3 ' src={REACT} alt="React Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>React</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals & Simple Hooks</p>
                    <p className=' py-2 border-b mx-8 mb-2'>6/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-3/5 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

        
            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-down" data-aos-delay="500">
                <img className='w-20 mx-auto mt-3 ' src={NodeJS} alt="Nodejs ENVIRONMENT Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>Node.js</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals learned from F8</p>
                    <p className=' py-2 border-b mx-8 mb-2'>5/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-3/6 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-down" data-aos-delay="500">
                <img className='w-20 mx-auto mt-3 ' src={Tailwind} alt="Tailwind Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>Tailwind</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals & simple core concepts</p>
                    <p className=' py-2 border-b mx-8 mb-2'>6/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-3/5 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-down" data-aos-delay="500">
                <img className='w-20 mx-auto mt-3 ' src={Flask} alt="Flask Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>Flask</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals From CS50</p>
                    <p className=' py-2 border-b mx-8 mb-2'>6/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-3/6 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

    </div>
    </div>
  )
}

export default Frameworks