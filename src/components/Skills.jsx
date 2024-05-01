import React from 'react'
import Java from '../assets/java.png'
import C from '../assets/C.png'
import Python from '../assets/python.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import Sqlite from '../assets/SQLite.png'
import MongoDB from '../assets/mongoDB.png'

const Skills = () => {
  return (
    <div className='w-full py-[5rem] px-4 bg-[#ffffff]' id='skills'>
        <div className='max-w-[1240px] mx-auto flex my-5 text-black'><h2 className='md:text-4xl sm:text-3xl text-2xl font-bold'>My Skills</h2></div>
        <div className='max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-up">
                <img className='w-20 mx-auto mt-3 ' src={Java} alt="Jva Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>Java</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals & FXML GUI</p>
                    <p className=' py-2 border-b mx-8 mb-2'>7/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-2/3 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-up" data-aos-delay="100">
                <img className='w-20 mx-auto mt-3 ' src={C} alt="C Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>C</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Learned Fundamentals from CS50</p>
                    <p className=' py-2 border-b mx-8 mb-2'>3/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-2/6 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-up" data-aos-delay="200">
                <img className='w-20 mx-auto mt-3 ' src={Python} alt="Python Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>Python</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals, Web, ML basics</p>
                    <p className=' py-2 border-b mx-8 mb-2'>5/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-3/6 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-up" data-aos-delay="300">
                <img className='w-20 mx-auto mt-3 ' src={Html} alt="Html Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>HTML</h2>
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

            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-up" data-aos-delay="400">
                <img className='w-20 mx-auto mt-3 ' src={Css} alt="Css Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>CSS</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals & Advances</p>
                    <p className=' py-2 border-b mx-8 mb-2'>7/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-2/3 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-up" data-aos-delay="500">
                <img className='w-20 mx-auto mt-3 ' src={Javascript} alt="JS Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>Javascript</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals & A little bit more</p>
                    <p className=' py-2 border-b mx-8 mb-2'>6/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-3/5 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-up" data-aos-delay="600">
                <img className='w-20 mx-auto mt-3 ' src={Sqlite} alt="SQLite Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>SQLite</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals & Code implementation</p>
                    <p className=' py-2 border-b mx-8 mb-2'>6/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-3/5 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-500" data-aos="zoom-in-up" data-aos-delay="700">
                <img className='w-20 mx-auto mt-3 ' src={MongoDB} alt="MongoDB Icon" />
                <h2 className='text-2xl font-bold text-center py-5 border-b'>MongoDB</h2>
                <div className='text-center font-medium'>
                    <p className=' py-2 border-b mx-8 mb-2'>Fundamentals & MongoDBCompass</p>
                    <p className=' py-2 border-b mx-8 mb-2'>6/10</p>
                </div>
                <div className="flex w-full justify-center">
                    <div class="w-[200px] h-2 bg-blue-200 rounded-full flex">
                        <div class="w-3/5 h-full text-center text-xs text-white bg-[#ff6f00] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills