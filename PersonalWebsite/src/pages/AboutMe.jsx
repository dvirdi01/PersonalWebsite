import React from 'react'
import LinkedInHeadshot from '../assets/LinkedInHeadshot.JPG'
import { Fade } from 'react-awesome-reveal'

const AboutMe = () => {
    const text = "Hi! I'm Divjot — a Computer Science and Math student at UBC who loves building things that are both functional and thoughtful. Whether it's solving a tricky bug, designing a clean UI, or figuring out how to make tech more human, I enjoy the process of turning ideas into something real. I’m especially interested in data-driven projects, full-stack development, and using code to solve everyday problems. Outside of code, you’ll probably find me sketching ideas, learning something new, or just chasing good coffee."
  return (
    <Fade triggerOnce={true}>
    <div style={{ fontFamily: "Nimbus Mono, monospace" }} className='bg-[#0d1117] min-h-screen w-full px-8 py-12 mt-5 flex flex-row gap-10 items-start justify-center text-white z-10'>
        <div className='p-4 rounded max-w-xl text-center md:text-left'>
            <h1 className='text-2xl mb-8 font-bold'>About Me</h1>
            {text}
        </div>
        <div className='flex-shrink-0'> 
            <img className="h-64 w-64 rounded-full object-cover border-4 border-gray-300 shadow-md" src={LinkedInHeadshot}></img>
        </div>
    </div>


    </Fade>
  )
}

export default AboutMe