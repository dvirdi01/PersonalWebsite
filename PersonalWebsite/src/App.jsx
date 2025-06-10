import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Work from './pages/Work'

function App() {

  return (
    <>
    <div className='bg-'>
       <Navbar/>
    {/* <Home/> */}
    <Work/>

    </div>
    </>
  )
}

export default App
