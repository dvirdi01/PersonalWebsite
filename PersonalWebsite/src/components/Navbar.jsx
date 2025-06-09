import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-200 w-full flex flex-row items-center justify-between px-4 z-4 sticky'>
        <p> Portfolio </p>
        <div className='flex flex-row items-center space-between gap-5 p-4'>
            <p>About Me</p>
            <p> Work</p>
            <p> Projects</p>
            <p> Contact</p>
            <button> Resume</button>
        </div>
    </div>
  )
}

export default Navbar