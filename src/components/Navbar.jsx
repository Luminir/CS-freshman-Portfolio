import React from 'react';
import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav)
  }

  const closeMenu = () => setNav(false)

  return (
    <div className='text-black flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4' id='home'>
        <h1 className='w-full text-3xl font-bold text-[#3aaccf]'>Luminir.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
            <li className='p-4'><Link activeClass="active" to="biography" spy={true} smooth={true} offset={-70} duration={500}>Biography</Link></li>
            <li className='p-4'><Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
            <li className='p-4'><Link activeClass="active" to="frameworks" spy={true} smooth={true} offset={50} duration={500}>Frameworks</Link></li>
            <li className='p-4'><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <IoMdClose size={30}/> : <MdMenu size={30}/>}
          {/* <MdMenu size={30}/> */}
        </div>
        <div className={nav ? 'fixed left-2 top-2 w-[50%] border border-black h-full bg-blue-200 rounded-xl ease duration-700 md:hidden z-50' : 'fixed left-[-100%] top-2 w-[50%] border border-black h-full bg-blue-200 rounded-xl ease duration-700 md:hidden z-50'}>
        <h1 className='w-full text-3xl font-bold text-[#3aaccf] m-4'>Luminir.</h1>
          <ul className=' uppercase p-3'>
              <li className='p-4 border-b border-gray-100'><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link></li>
              <li className='p-4 border-b border-gray-100'><Link activeClass="active" to="biography" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Biography</Link></li>
              <li className='p-4 border-b border-gray-100'><Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>My Skills</Link></li>
              <li className='p-4 border-b border-gray-100'><Link activeClass="active" to="frameworks" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>My Frameworks</Link></li>
              <li className='p-4 border-b border-gray-100'><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar