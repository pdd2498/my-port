import React from 'react'
import Pr from './Pr'
import movies from '../assits/Screenshot 2024-04-15 152941.png'
import olx from '../assits/Screenshot 2024-04-15 161511.png'

export default function Project() {
  return (
    <div id='project' className='flex flex-col items-center justify-center w-4/5 m-auto pt-24'>
        <h1 className=' text-5xl font-bold m-6'>PROJECTS</h1>
        <div className=' w-10 h-1 bg-orange-700'></div>
        <p className=' text-xl w-2/3  font-medium text-center text-gray-600 m-6'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
        <Pr but = {"https://bright-dodol-6bae1a.netlify.app/"} git = {"https://github.com/pdd2498/movie-project"} url = {movies} h3 = {"Movix"} p = {"Movix is a personal project aimed at learning frontend development skills, particularly in handling APIs. This project provides a web application where users can discover and enjoy wa tching movies and TV shows."} />
        <Pr but={"https://olx-clone-5ba355.netlify.app/"} git={"https://github.com/abhikainthla/OLX-Clone"} url={olx} h3 = {"olx"} p={"OLX Clone project! This project aims to replicate the functionality of the popular online marketplace, OLX. Whether you're a developer looking to contribute or a user wanting to set up your own local classifieds platform, you're in the right place."} />
    </div>
  )
}
