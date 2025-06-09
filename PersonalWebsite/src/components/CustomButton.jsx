import React from 'react'
import { LuMouse } from "react-icons/lu";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const CustomButton = () => {

    const handleClick = () => {
        console.log("clicked")
    }
  return (
    <button className='animate-bounce text-3xl' onClick={handleClick}>
        <LuMouse />
        <MdOutlineKeyboardDoubleArrowDown/>
    </button>
    
  )
}

export default CustomButton