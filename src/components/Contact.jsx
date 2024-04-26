import React from 'react'
import Github from '../assets/github.png'
import Fb from '../assets/fb.png'

const Contact = () => {
  return (
    <div className='w-full py-16 text-black' id='contact'>
        <div className='max-w-[1240px] px-4 mx-auto grid md:grid md:grid-cols-2'>
            <div className=' max-w-[500px]'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Contact Me</h1>
                <p>I am available for freelance, intern work. Connect with me via email. You can check me at:</p>
                <div className=' flex items-center justify-center'>
                    <a href="https://github.com/Luminir"><img src={Github} alt="github" className=' w-[120px] flex'/></a>
                    <a href="https://www.facebook.com/tns.tran/"><img src={Fb} alt="Facebook" className='w-[120px] flex' /></a>
                </div>
            </div>
            <div className=''>
                <form className="my-4" action='https://getform.io/f/nbvvpymb' method='POST' encType='multipart/form-data'>
                    <div className="contacting">
                        <input className=' border-2 border-solid shadow-lg p-2 flex w-full rounded' type="text" name="name" id="" placeholder='Your name'/>
                        <input className=' border-2 border-solid shadow-lg p-2 flex w-full rounded my-2' type="email" name="email" id="" placeholder='Your Email'/>
                        <input className=' border-2 border-solid shadow-lg p-2 flex w-full rounded' type="text" name="subject" id="" placeholder='Subject'/>
                        <textarea className=' border-2 border-solid shadow-lg p-2 block w-full mt-2' placeholder='Your message' rows={8} name="message"></textarea>
                        <button className='border-2 border-solid my-4 bg-[#3aaccf] text-white w-full rounded-md font-medium mx-auto justify-center py-[10px]' type="submit">Send Email</button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Contact