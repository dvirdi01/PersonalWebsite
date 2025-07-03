import React from 'react'
import { LuMouse } from "react-icons/lu";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const CustomButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/about-me/`)
        
    }
  return (
    <button className='animate-bounce text-3xl' onClick={handleClick}>
        <LuMouse />
        <MdOutlineKeyboardDoubleArrowDown/>
    </button>
    
  )
}

export default CustomButton
