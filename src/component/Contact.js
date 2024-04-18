import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='pt-24 flex flex-col items-center justify-center w-4/5 m-auto'>
         <h1 className=' text-5xl font-bold m-6'>CONTACT</h1>
        <div className=' w-10 h-1 bg-orange-700'></div>
        <p className=' text-xl w-2/3  font-medium text-center text-gray-600 m-6'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        
        <div style={{
      boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    }} className=' mt-20  bg-[url("https://wallpaperbat.com/img/913319-abstract-blue-watercolor-background-white-texture-watercolor-painted-on-paper-color-art-wallpaper-design-illustration.jpg")] bg-cover px-32 py-20 rounded-md w-2/3 flex flex-col items-center justify-center'>
            <div className=' flex flex-col items-center justify-center gap-3 w-full mb-14'>
                <div className='flex flex-col items-start justify-center w-full'>
                    <label className=' text-slate-950 font-medium text-xl' htmlFor="">Name</label>
                    <input className=' my-3 p-3 rounded-md w-full' type="text" name="name" id="" />
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3 w-full mb-14'>
                <div className='flex flex-col items-start justify-center w-full'>
                <label className=' text-slate-950 font-medium text-xl' htmlFor="">Email</label>
                <input className=' my-3 p-3 rounded-md w-full' type="email" name="" id="" />
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3 w-full '>
                <div className='flex flex-col items-start justify-center w-full'>
                <label className=' text-slate-950 font-medium text-xl' htmlFor="">Message</label>
                <textarea className=' w-full rounded-md my-3 p-3' name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className=' flex flex-col items-end justify-center gap-3 w-full mt-4'>
                <button className='hover:bg-orange-600 px-12 py-4 bg-slate-950 rounded-md text-gray-50 text-xl font-semibold' >submit</button>
            </div>
        </div>
    </div>
  )
}
