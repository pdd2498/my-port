import React from 'react'
import image from '../assits/PicsArt_02-04-02.48.02.jpg'


export default function NaveBar() {
  return (
    <div className=' fixed top-0 right-0 w-screen z-10 flex items-center justify-between p-4 font-sans text-xl font-bold px-28 bg-slate-100'>

      <div className='flex items-center justify-around gap-5'>
        <div>
            <img className='w-16 h-16 rounded-full' src={image} alt="" />
        </div>
        <h1>PREYESH DHAR DIWAN</h1>
      </div>

      <div>
        <ul className='flex items-center justify-around'>
          <a href="#home">
            <li className=' hover:bg-slate-300 px-8 py-3 rounded-md'>HOME</li>
          </a>
          <a href="./#about">
            <li className='hover:bg-slate-300 px-8 py-3 rounded-md'>ABOUT</li>
          </a>
          <a href="#project">
            <li className=' hover:bg-slate-300 px-8 py-3 rounded-md'>PROJECT</li>
          </a>
            <a href="#contact">
            <li className=' hover:bg-slate-300 px-8 py-3 rounded-md'>CONTACT</li>
            </a>
        </ul>
      </div>

    </div>
  )
}
