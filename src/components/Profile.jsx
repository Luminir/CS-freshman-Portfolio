import React from 'react';
import { ReactTyped } from "react-typed";
import { Link } from 'react-scroll';

const Profile = () => {
  return (
    <div className='text-black h-screen'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p className='text-[#3aaccf] font-extrabold p-2'>A CODING NEWBIE</p>
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Hello, <span>My name's Tran Nam Son</span></h1>
            <p className='md:text-3xl sm:text-2xl text-1xl pt-3 text-[#969595]'>You can call me Luminir</p>
            <div className='flex justify-center items-center font-bold pt-3'>
                <p className='md:text-4xl sm:text-3xl text-2xl'>
                    I use <ReactTyped className='md:text-4xl sm:text-3xl text-2xl text-[#ff6f00] pl-1'
                            strings={['MERN stack', 'Java', 'Python']} typeSpeed={120} backSpeed={130} loop/>.
                </p>
            </div>
            <button className='my-4 bg-[#3aaccf] text-white w-[200px] rounded-md font-medium mx-auto py-[10px] hover:bg-[#ff6f00] duration-300'>
              <Link activeClass="active" to="biography" spy={true} smooth={true} offset={50} duration={500}>Who am I?</Link>
            </button>
        </div>
    </div>
  )
}

export default Profile