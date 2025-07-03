import React from 'react'

const CommonButton = ({label}) => {
    const borderStyle = "ease absolute border-[#58a6ff] transition-all duration-100 group-hover:w-full bg-[#f7e2c7]"
  return (
    <button className='group relative inline-block overflow-hidden px-8 py-3 text-sm font-medium text-[#f7e2c7] hover:text-[#f7e2c7] focus:outline-none focus:ring active:bg-indigo-600 active:text-white'>
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-1 border-[#f7e2c7] transition-all duration-100 group-hover:w-full"></span>
	    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-1 border-[#f7e2c7] transition-all duration-100 group-hover:h-full"></span>
	    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-1 border-[#f7e2c7] transition-all duration-100 group-hover:w-full"></span>
	    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-1 border-[#f7e2c7] transition-all duration-100 group-hover:h-full"></span>
	    {label}
    </button>
  )
}

export default CommonButton