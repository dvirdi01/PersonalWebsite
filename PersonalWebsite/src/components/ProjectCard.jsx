import React from 'react'
import GitHub from '../assets/image.png'

const ProjectCard = ({title, description, image, link}) => {
  return (
     <div className='w-80 backdrop-blur-md bg-white/5 border border-white/20 border border-gray-200 rounded-lg shadow-sm flex flex-col items-start justify-center'>
        <img className='object-cover h-64 w-full rounded-t-lg ' src = {image}></img>
        <div className='bg-white w-full text-black'>
            <h1 className='py-2 text-2xl font-bold tracking-tight text-[#4E4FEB] px-5'>{title}</h1>
            <p class="mb-3 font-normal px-5">{description}</p>
            <div className='px-5 mb-5'>
                <button className='px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800'>Check it Out</button>
            </div>

        </div>
    </div>
  )
}

export default ProjectCard