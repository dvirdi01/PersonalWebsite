import React from 'react'
import GitHub from '../assets/image.png'

const ProjectCard = ({title, description, image, link}) => {
  return (
     <div className="w-80 rounded-xl p-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover rounded-lg"
      />
      <div className="p-4 text-[#F7E2C7]">
        <h1 className="text-2xl font-semibold mb-2 text-[#F7E2C7]">{title}</h1>
        <p className="text-sm text-[#F7E2C7] mb-4">{description}</p>
        <a 
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-4 py-2 text-sm font-medium text-[#578e87] bg-[#F7E2C7] rounded-md shadow-md hover:bg-[#f1d8bc] transition-colors duration-200"
>
  Check it Out
</a>
      </div>
    </div>
  )
}

export default ProjectCard