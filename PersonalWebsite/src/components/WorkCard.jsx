import React from 'react'
import { useState, useEffect, useRef } from 'react';

const WorkCard = ({title, date, text, fullText, image}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [textHeight, setTextHeight] = useState(0);
  const textRef = useRef(null);

  // measure height of text block
  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.clientHeight);
    }
  }, [isHovered, fullText]);

  return (
    <div
    className={`bg-[#0d1117] w-full px-8 py-12 flex flex-row items-center justify-center text-white z-10 items-start transition-all duration-500 ease-in-out`}
     onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* Text */}
    <div className="p-4 shadow-md max-w-xl text-center md:text-left bg-white/5 transition-all duration-500 ease-in-out"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    ref={textRef}>
      <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
      <p className="text-md mb-2">{date}</p>
      <p className={`text-sm transition-all duration-500 ease-in-out`}>
        {isHovered ? fullText : text}
      </p>
    </div>

    {/* Image (always rendered, smoothly shown/hidden) */}
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isHovered ? 'w-64 opacity-100 ml-4' : 'w-0 opacity-0 ml-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: textHeight }}
    >
      <img
        className="h-full w-full object-cover rounded-md shadow-md"
        src={image}
      />
    </div>
  </div>
  )
}

export default WorkCard