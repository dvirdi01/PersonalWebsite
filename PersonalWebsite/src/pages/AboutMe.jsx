import React from 'react'
import LinkedInHeadshot from '../assets/LinkedInHeadshot.JPG'
import { Fade } from 'react-awesome-reveal'

const AboutMe = () => {
    const text = "Hi! I'm Divjot — a Computer Science and Math student at UBC who loves building things that are both functional and thoughtful. Whether it's solving a tricky bug, designing a clean UI, or figuring out how to make tech more human, I enjoy the process of turning ideas into something real. I’m especially interested in data-driven projects, full-stack development, and using code to solve everyday problems. Outside of code, you’ll probably find me sketching ideas, learning something new, or just chasing good coffee."
  return (
    <Fade direction = "down" triggerOnce={true} duration={2000}>
    <div style={{ fontFamily: "Nimbus Mono, monospace" }} className='bg-[#0d1117] w-full px-8 py-12 flex flex-row gap-10 items-center justify-center text-white z-10'>
        <div className='p-8 rounded shadow-md max-w-xl text-center md:text-left bg-white/5'>
            <h1 className='text-2xl mb-5 font-bold'>About Me</h1>
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