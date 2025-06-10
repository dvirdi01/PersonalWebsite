import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Navbar = () => {
  return (
    <div style={{ fontFamily: "Nimbus Mono, monospace" }} className='bg-[#0d1117] w-full flex flex-row items-center justify-between space-between px-8 z-4 sticky text-white'>
        <Fade cascade damping={0.1} triggerOnce={true} duration={2000}>
          <p> Home </p>
          <ul className='flex flex-row space-between gap-5 p-4 '>
            <li> About Me </li>
            <li> Work</li>
            <li> Projects </li>
            <li> Contact </li>
          </ul>
          <button> Resume</button>
        </Fade>
    </div>
  )
}

export default Navbar