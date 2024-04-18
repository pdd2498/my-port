import React from 'react'

export default function Footer() {
  return (
    <footer className=' p-10 flex-col bg-black text-white mt-40 flex items-center justify-center h-72'>
        <div style={{
            borderBottom: "1px solid white",
            paddingBottom: "40px"
        }} className=' flex items-center justify-between w-4/5'>
            <div className=' w-2/5'>
                <h1 className="text-3xl font-medium my-6">Preyesh Dhar Diwan</h1>
                <p>A Frontend Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
            </div>
            <div>
                <h1 className="text-3xl font-medium my-6">socal</h1>
                <div className="text-3xl font-medium my-6">
                <a className="mr-3" href="https://github.com/pdd2498">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a className="mr-3" href="https://www.linkedin.com/in/preyesh-dhar-diwan-8324b3194/">
                  <i class="fa-brands fa-linkedin "></i>
                </a>
                <a className="" href="https://www.instagram.com/preyeshdhar/?hl=en">
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
                </div>
            </div>
        </div>
        <hr />
        <h1 className='m-10'>Made by Preyesh Dhar Diwan</h1>
    </footer>
  )
}
