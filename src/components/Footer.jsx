import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' mx-auto py-16 px-4 text-gray-300 bg-[#3aaccf]'>
        <div>
            <h1 className='w-full text-3xl font-bold text-white text-center'>Luminir.</h1>
            <p className='text-center py-2'>&#169; 2024. All rights reserved to Tran Nam Son.</p>
        </div>
        <div className='flex justify-center'>
          <a href="https://www.facebook.com/tns.tran/"><FaFacebookSquare size={30}/></a>
          <a href="https://www.instagram.com/tns.tran/"><FaInstagramSquare size={30}/></a>
          <a href="https://github.com/Luminir"><FaGithubSquare size={30}/></a>
        </div>
    </div>
  )
}

export default Footer