import React from 'react'
import MyPic from '../assets/profile.jpg'

const MyFace = () => {
  return (
    <div className='w-full bg-[#3aaccf] py-16 px-4 box-border' id='biography'>
        <div className='max-w-[1240px] mx-auto grid md:grid md:grid-cols-2'>
            <img className='w-[350px] mx-auto my-4 rounded-3xl md:w-[400px] lg:w-[500px]' src={MyPic} alt="Tran Nam Son's 2023 face" data-aos="fade-left"/>
            <div className='flex flex-col justify-center px-3'>
                <h1 className='text-white uppercase font-bold md:text-4xl sm:text-3xl text-2xl py-3'>Who am I?</h1>
                <div className="bio text-justify" data-aos="fade-right">
                    <p className='pt-2'><span className='text-[#ffffff]'>Born in: </span>28/03/2005</p>
                    <p className='pt-2'><span className='text-[#ffffff]'>From: </span>Ba Đinh District, Ha Noi, Vietnam</p>
                    <p className='pt-2'><span className='text-[#ffffff]'>Education: </span>FIT Freshman at Hanoi University (2023 ~)</p>
                    <p className='pt-2'><span className='text-[#ffffff]'>Email: </span>trannamson0328@gmail.com</p>
                    <p className='pt-2'><span className='text-[#ffffff]'>Projects: </span>Check my works on <a href="https://github.com/Luminir" className='text-[#97f5a8]'>Github</a></p>
                    <p className='pt-2 text-[#ffffff]'>"I love to be able to build and create things that pleased the eyes and functional. Currently, I'm all in Web Development but still willingly to change accordingly to what the world needs."</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyFace