import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link, NavLink } from "react-router-dom";
import CommonButton from './CommonButton';
import "@fontsource/fira-code";

const Navbar = () => {
  return (
    <div style={{ fontFamily: "Fira Code, monospace" }} className='bg-[#578E87] w-full flex flex-row items-center justify-between space-between px-8 z-4 sticky text-[#f7e2c7]'>
        <Fade cascade damping={0.1} triggerOnce={true} duration={2000}>
          <Link to="/">
            <p> Home </p>
          </Link>
          <ul className='flex flex-row space-between gap-5 p-4 '>
            <Link to="/about-me">
            <li> About Me </li>
            </Link>
            <Link to="/work">
            <li> Work </li>
            </Link>
            <Link to="/projects">
            <li> Projects </li>
            </Link>
            <Link to="/contact">
            <li> Contact </li>
            </Link>
          </ul>
           <CommonButton label="Resume"/>
        </Fade>
    </div>
  )
}

export default Navbar