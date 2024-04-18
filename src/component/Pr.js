import React from 'react'


export default function Pr({but, git, url , h3 , p}) {
  return (
    <div className=' mt-20 mb-10'>
        <div className=' flex items-center justify-center'>
            <div className=' w-1/2 p-10 shadow-xl'>
                <img src={url} alt="" />
            </div>
            <div className=' w-1/2 p-10'>
                <h3 className=' text-3xl font-bold my-6'>{h3}</h3>
                <p className=' text-lg  font-medium text-start text-gray-600 my-6'>{p}</p>
                <a  className='text-4xl  hover:bg-slate-300 p-3 rounded-md' href={but}><i class="fa-solid fa-laptop"></i></a><a  className='text-4xl  hover:bg-slate-300 p-3 rounded-md' href={git}><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>
  )
}
