import React from 'react'

export default function AboutMe() {
  return (
    <div id='about' className='pt-24 flex flex-col items-center justify-center w-4/5 m-auto'>
        <h1 className=' text-5xl font-bold m-6'>ABOUT ME</h1>
        <div className=' w-10 h-1 bg-orange-700'></div>
        <p className=' text-xl w-2/3  font-medium text-center text-gray-600 m-6'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>

        <div className='flex items-start justify-center '>
            <div className='w-2/4 p-10 '>
                <h3 className=' text-3xl font-bold my-6' >
                    Get to know me!
                </h3>
                <p className=' text-lg  font-medium text-start text-gray-600  my-6'>
                I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                </p>
                <p className=' text-lg  font-medium text-start text-gray-600  my-6'>
                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/preyesh-dhar-diwan-8324b3194/"> Linkedin </a>and <a href="https://www.instagram.com/preyeshdhar/?hl=en"> Instagram </a>where I post useful content related to Web Development and Programming
                </p>
                <p  >
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                </p>
                <button className='hover:bg-orange-600 px-12 py-4 bg-orange-400 rounded-md text-gray-50 text-xl font-semibold' >CONTACT</button>
            </div>

            <div className='w-2/4 p-10'>
                <h3 className=' text-3xl font-bold my-6'>
                    My Skills
                </h3>
                <div className=' flex flex-wrap items-center gap-6'>
                    <span className='px-6 py-2 bg-slate-200 rounded-md font-medium text-gray-600 text-lg'>HTML</span>
                    <span className='px-6 py-2 bg-slate-200 rounded-md font-medium text-gray-600 text-lg'>CSS</span>
                    <span className='px-6 py-2 bg-slate-200 rounded-md font-medium text-gray-600 text-lg'>JavaScript</span>
                    <span className='px-6 py-2 bg-slate-200 rounded-md font-medium text-gray-600 text-lg'>React js</span>
                    <span className='px-6 py-2 bg-slate-200 rounded-md font-medium text-gray-600 text-lg'>JAVA</span>
                    <span className='px-6 py-2 bg-slate-200 rounded-md font-medium text-gray-600 text-lg'>DSA</span>
                </div>
            </div>
        </div>
    </div>
  )
}
