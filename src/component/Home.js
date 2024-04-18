import React from 'react'

export default function Home() {
  return (
    <div id='home' style={{
      boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    }} className='flex items-center justify-center h-screen bg-[url("https://wallpaperbat.com/img/913319-abstract-blue-watercolor-background-white-texture-watercolor-painted-on-paper-color-art-wallpaper-design-illustration.jpg")] mb-8 mt-4 bg-no-repeat bg-cover'>
        <div className='flex flex-col items-center justify-center gap-14 h-3/4 '>
            <div>
                <h1 className='text-5xl font-extrabold'>HEY, I'M PREYESH DHAR DIWAN</h1>
            </div>
            <div className=' w-3/5 text-center'>
                <p className='text-xl mx-3.5'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
            </div>
            <button className='hover:bg-orange-600 px-12 py-4 bg-orange-400 rounded-md text-gray-50 text-xl font-semibold'>PROJECTS</button>
            <div className='flex flex-col items-center justify-center absolute left-0 p-3 bg-slate-100 rounded-md'>
              <div className='text-4xl  hover:bg-slate-300 p-3 rounded-md'>
                <a href="https://www.linkedin.com/in/preyesh-dhar-diwan-8324b3194/">
                  <i class="fa-brands fa-linkedin "></i>
                </a>
              </div>
              <div className='text-4xl  hover:bg-slate-300 p-3 rounded-md'>
                <a href="https://github.com/pdd2498">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
              <div className='text-4xl  hover:bg-slate-300 p-3 rounded-md'>
                <a href="https://www.instagram.com/preyeshdhar/?hl=en">
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}
